// import { prisma } from "../../lib/prisma";

// const createMeal = async (payload: any, userID: string) => {
//     const { categoryName, ...rest } = payload;

//     const providerProfile = await prisma.providerProfile.findUnique({
//         where: { userId: userID }
//     });

//     if (!providerProfile) {
//         throw new Error("Provider profile not found! Please create a profile first.");
//     }

//     const result = await prisma.meal.create({
//         data: {
//             name: rest.name,
//             description: rest.description,
//             price: Number(rest.price),
//             imageUrl: rest.imageUrl,
//             provider: {
//                 connect: { id: providerProfile.id }
//             },
//             category: {
//                 connectOrCreate: {
//                     where: { name: categoryName },
//                     create: { name: categoryName }
//                 }
//             }
//         },
//         include: {
//             category: true
//         }
//     });

//     return result;
// };

// const getAllMeals = async (userID: string) => {
//     const providerProfile = await prisma.providerProfile.findUnique({
//         where: { userId: userID }
//     });

//     if (!providerProfile) {
//         throw new Error("Provider profile not found!!");
//     }

//     const result = await prisma.meal.findMany({
//         where: {
//             providerId: providerProfile.id
//         },
//         include: {
//             category: true
//         }
//     });

//     return result;
// };

// const getSingleMeal = async (mealID: string) => {
//     const result = await prisma.meal.findUnique({
//         where: { id: mealID },
//         include: {
//             provider: true,
//             category: true
//         }
//     });

//     if (!result) {
//         throw new Error("Meal not found!!");
//     }

//     return result;
// };

// export const MealsService = {
//     createMeal,
//     getAllMeals,
//     getSingleMeal
// };



import { prisma } from "../../lib/prisma";

const createMeal = async (payload: any, userId: string) => {
    const { categoryName, ...rest } = payload;

    const providerProfile = await prisma.providerProfile.findUnique({
        where: { userId }
    });

    if (!providerProfile) {
        throw new Error("Provider profile not found! Please create a profile first.");
    }

    const result = await prisma.meal.create({
        data: {
            name: rest.name,
            description: rest.description,
            price: Number(rest.price),
            imageUrl: rest.imageUrl,
            provider: {
                connect: { id: providerProfile.id }
            },
            category: {
                connectOrCreate: {
                    where: { name: categoryName },
                    create: { name: categoryName }
                }
            }
        },
        include: {
            category: true
        }
    });

    return result;
};

const getAllMeals = async (userId: string) => {
    const providerProfile = await prisma.providerProfile.findUnique({
        where: { userId }
    });

    if (!providerProfile) throw new Error("Provider profile not found!!");

    return await prisma.meal.findMany({
        where: { providerId: providerProfile.id },
        include: { category: true }
    });
};

const getSingleMeal = async (mealId: string) => {
    const result = await prisma.meal.findUnique({
        where: { id: mealId },
        include: { provider: true, category: true }
    });

    if (!result) throw new Error("Meal not found!!");
    return result;
};

export const MealsService = {
    createMeal,
    getAllMeals,
    getSingleMeal
};