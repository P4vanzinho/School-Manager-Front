import { ITEM_PER_PAGE } from "@/lib/configs";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { catchQueryParams } from "../utils/catchQueryParams";

export const useClasses = async (searchParams: { [key: string]: string | undefined }) => {
    const { page, queryParams } = catchQueryParams(searchParams)
    const query: Prisma.ClassWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "supervisorId":
                        query.supervisorId = value;
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
            prisma.class.findMany({
                where: query,
                include: {
                    supervisor: true,
                },
                take: ITEM_PER_PAGE,
                skip: ITEM_PER_PAGE * (page - 1),
            }),
            prisma.class.count({ where: query }),
        ]);

        return { classesData: data, classesCount: count };
    } catch (err) {
        throw new Error("Failed to fetch teachers");
    }
}; 