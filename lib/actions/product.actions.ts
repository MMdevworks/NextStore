'use server';
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
//get latest products
export async function getLatestProducts(){
    const data = await prisma.product.findMany({
        //show limit defined in constants/index.ts
        take: LATEST_PRODUCTS_LIMIT,
        orderBy: {createdAt: 'desc'},
    });

    return convertToPlainObject(data);
}