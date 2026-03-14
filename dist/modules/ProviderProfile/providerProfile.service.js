"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderProfileService = void 0;
const prisma_1 = require("../../lib/prisma");
const createProviderProfile = async (userId, payload) => {
    const isExist = await prisma_1.prisma.providerProfile.findUnique({
        where: { userId }
    });
    if (isExist) {
        throw new Error("Provider profile already exists for this user!");
    }
    const result = await prisma_1.prisma.providerProfile.create({
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
const getAllProviderMeals = async (userId) => {
    const providerProfile = await prisma_1.prisma.providerProfile.findUnique({
        where: { userId }
    });
    if (!providerProfile) {
        throw new Error("Provider profile not found!!");
    }
    const result = await prisma_1.prisma.meal.findMany({
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
const getSingleProviderMeal = async (userId, mealId) => {
    const providerProfile = await prisma_1.prisma.providerProfile.findUnique({
        where: { userId }
    });
    if (!providerProfile) {
        throw new Error("Provider profile not found!!");
    }
    const result = await prisma_1.prisma.meal.findFirst({
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
exports.ProviderProfileService = {
    createProviderProfile,
    getAllProviderMeals,
    getSingleProviderMeal
};
//# sourceMappingURL=providerProfile.service.js.map