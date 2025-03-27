import { ITEM_PER_PAGE } from "@/lib/configs";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { catchQueryParams } from "../utils/catchQueryParams";

export const useEvents = async (searchParams: { [key: string]: string | undefined }) => {
    const { page, queryParams } = catchQueryParams(searchParams)
    const query: Prisma.EventWhereInput = {};

    if (queryParams) {
        for (const [key, value] of Object.entries(queryParams)) {
            if (value !== undefined) {
                switch (key) {
                    case "search":
                        query.OR = [
                            { title: { contains: value, mode: "insensitive" } },
                            { class: { name: { contains: value, mode: "insensitive" } } }
                        ]
                        break;
                    default:
                        break;
                }
            }
        }
    }

    try {
        const [data, count] = await prisma.$transaction([
            prisma.event.findMany({
                where: query,
                include: {
                    class: true,
                },
                take: ITEM_PER_PAGE,
                skip: ITEM_PER_PAGE * (page - 1),
            }),
            prisma.event.count({ where: query }),
        ]);

        return { eventsData: data, eventsCount: count };
    } catch (err) {
        throw new Error("Failed to fetch teachers");
    }
}; 