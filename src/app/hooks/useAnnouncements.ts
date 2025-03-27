import { ITEM_PER_PAGE } from "@/lib/configs";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { catchQueryParams } from "../utils/catchQueryParams";

export const useAnnouncements = async (searchParams: { [key: string]: string | undefined }) => {
    const { page, queryParams } = catchQueryParams(searchParams)
    const query: Prisma.AnnouncementWhereInput = {};

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
            prisma.announcement.findMany({
                where: query,
                include: {
                    class: true,
                },
                take: ITEM_PER_PAGE,
                skip: ITEM_PER_PAGE * (page - 1),
            }),
            prisma.announcement.count({ where: query }),
        ]);

        return { announcementsData: data, announcementsCounts: count };
    } catch (err) {
        throw new Error("Failed to fetch teachers");
    }
}; 