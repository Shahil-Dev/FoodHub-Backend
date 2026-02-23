import { prisma } from "../../lib/prisma";

const createMeal = async (payload: any, userID: string) => {
    const { categoryId, providerId, ...rest } = payload;

    const user = await prisma.user.findUnique({
        where: {
            id: userID
        }
    });

    if (!user) {
        throw new Error("User not found!!");
    }

    const result = await prisma.meal.create({
        data: {
            ...rest,
            providerId: userID,
            categoryId: categoryId || null
        }
    });

    return result;
};
const getAllMeals = async (userID: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: userID
        }
    });

    if (!user) {
        throw new Error("User not found!!");
    }

    const result = await prisma.meal.findMany({
        where: {
            providerId: userID
        }
    });


    return result;
};


export const MealsService = {
    createMeal,
    getAllMeals
};