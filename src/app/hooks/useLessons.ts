import { ITEM_PER_PAGE } from "@/lib/configs";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { catchQueryParams } from "../utils/catchQueryParams";

export const useLessons = async (searchParams: { [key: string]: string | undefined }) => {
    const { page, queryParams } = catchQueryParams(searchParams)
    const query: Prisma.LessonWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "classId":
                        query.classId = parseInt(value);
                        break;
                    case "teacherId":
                        query.teacherId = value;
                        break;
                    case "search":
                        query.OR = [
                            { subject: { name: { contains: value, mode: "insensitive" } } },
                            { teacher: { name: { contains: value, mode: "insensitive" } } },
                        ];
                        break;
                    default:
                        break;
                }
            }
        }
    }

    try {
        const [data, count] = await prisma.$transaction([
            prisma.lesson.findMany({
                where: query,
                include: {
                    subject: { select: { name: true } },
                    class: { select: { name: true } },
                    teacher: { select: { name: true, surname: true } },
                },
                take: ITEM_PER_PAGE,
                skip: ITEM_PER_PAGE * (page - 1),
            }),
            prisma.lesson.count({ where: query }),
        ]);

        return { lessonsData: data, lessonsCount: count };
    } catch (err) {
        throw new Error("Failed to fetch teachers");
    }
}; 