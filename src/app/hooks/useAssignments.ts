import { ITEM_PER_PAGE } from "@/lib/configs";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { catchQueryParams } from "../utils/catchQueryParams";

export const useAssignments = async (searchParams: { [key: string]: string | undefined }) => {
    const { page, queryParams } = catchQueryParams(searchParams)
    const query: Prisma.AssignmentWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "classId":
                        query.lesson = { classId: parseInt(value) }
                        break;
                    case "teacherId":
                        query.lesson = {
                            teacherId: value
                        };
                        break;
                    case "search":
                        query.lesson = {
                            OR: [
                                { subject: { name: { contains: value, mode: "insensitive" } } },
                                { class: { name: { contains: value, mode: "insensitive" } } },
                                {
                                    OR: [
                                        { teacher: { name: { contains: value, mode: "insensitive" } } },
                                        { teacher: { surname: { contains: value, mode: "insensitive" } } }
                                    ]

                                }
                            ]
                        };
                        break;
                    default:
                        break;
                }
            }
        }
    }

    try {
        const [data, count] = await prisma.$transaction([
            prisma.assignment.findMany({
                where: query,
                include: {
                    lesson: {
                        select: {
                            subject: { select: { name: true } },
                            class: { select: { name: true } },
                            teacher: { select: { name: true, surname: true } },
                        }
                    }
                },
                take: ITEM_PER_PAGE,
                skip: ITEM_PER_PAGE * (page - 1),
            }),
            prisma.assignment.count({ where: query }),
        ]);

        return { assignmentsData: data, assignmentsCount: count };
    } catch (err) {
        throw new Error("Failed to fetch teachers");
    }
}; 