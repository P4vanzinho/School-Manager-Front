import { ITEM_PER_PAGE } from "@/lib/configs";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { catchQueryParams } from "../utils/catchQueryParams";


export const useStudents = async (searchParams: { [key: string]: string | undefined }) => {
    const { page, queryParams } = catchQueryParams(searchParams)
    const query: Prisma.StudentWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "teacherId":
                        query.class = {
                            lessons: {
                                some: {
                                    teacherId: value,
                                },
                            },
                        };
                        break;
                    case "search":
                        query.name = { contains: value, mode: "insensitive" };
                        break;
                    default:
                        break;
                }
            }
        }
    }

    try {
        const [data, count] = await prisma.$transaction([
            prisma.student.findMany({
                where: query,
                include: {
                    class: true,
                },
                take: ITEM_PER_PAGE,
                skip: ITEM_PER_PAGE * (page - 1),
            }),
            prisma.student.count({ where: query }),
        ]);

        return { studentsData: data, studentsCount: count };
    } catch (err) {
        throw new Error("Failed to fetch teachers");
    }
}; 