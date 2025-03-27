import { ITEM_PER_PAGE } from "@/lib/configs";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";


export const catchQueryParams = (searchParams: { [key: string]: string | undefined }) => {
    const { page, ...queryParams } = searchParams;
    const p = page ? parseInt(page) : 1;
    const query: Prisma.StudentWhereInput = {};

    return { page: p, queryParams };

}; 