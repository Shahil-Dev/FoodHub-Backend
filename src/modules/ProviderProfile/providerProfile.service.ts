import { prisma } from "../../lib/prisma";

const createProviderProfile = async (userId: string, payload: any) => {
    const isExist = await prisma.providerProfile.findUnique({
        where: { userId }
    });

    if (isExist) {
        throw new Error("Provider profile already exists for this user!");
    }

    const result = await prisma.providerProfile.create({
        data: {
            businessName: payload.businessName,
            address: payload.address,
            description: payload.description,
            logoUrl: payload.logoUrl,
            userId: userId
        }
    });

    return result;
};



const getAllProviderMeals = async (userId: string) => {
    const providerProfile = await prisma.providerProfile.findUnique({
        where: { userId }
    });

    if (!providerProfile) {
        throw new Error("Provider profile not found!!");
    }

    const result = await prisma.meal.findMany({
        where: {
            providerId: providerProfile.id
        },
        include: {
            category: true 
        },
        orderBy: {
            createdAt: 'desc' 
        }
    });

    return result;
};

const getSingleProviderMeal = async (userId: string, mealId: string) => {
    const providerProfile = await prisma.providerProfile.findUnique({
        where: { userId }
    });

    if (!providerProfile) {
        throw new Error("Provider profile not found!!");
    }

    const result = await prisma.meal.findFirst({
        where: {
            id: mealId,
            providerId: providerProfile.id
        },
        include: {
            category: true
        }
    });

    if (!result) {
        throw new Error("Meal not found or you don't have permission to view this!");
    }

    return result;
};



export const ProviderProfileService = {
    createProviderProfile,
    getAllProviderMeals,
    getSingleProviderMeal
};