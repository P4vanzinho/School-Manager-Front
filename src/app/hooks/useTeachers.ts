import { ITEM_PER_PAGE } from "@/lib/configs";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { catchQueryParams } from "../utils/catchQueryParams";


export const useTeachers = async (searchParams: { [key: string]: string | undefined }) => {

    const { page, queryParams } = catchQueryParams(searchParams)

    const query: Prisma.TeacherWhereInput = {}

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "classId":
                        query.lessons = {
                            some: {
                                classId: parseInt(value)
                            }
                        };
                        break;

                    case "search":
                        query.name = { contains: value, mode: "insensitive" }
                }
            }
        }
    }

    try {
        const [teachers, totalCount] = await prisma.$transaction([
            prisma.teacher.findMany({
                where: query,
                include: {
                    subjects: true,
                    classes: true,
                },
                take: ITEM_PER_PAGE,
                skip: ITEM_PER_PAGE * (page - 1),
            }),
            prisma.teacher.count({
                where: query
            }),
        ]);

        return { data: teachers, count: totalCount };
    } catch (err) {
        throw new Error("Failed to fetch teachers");
    }
}; 