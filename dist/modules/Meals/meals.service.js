import { prisma } from "../../lib/prisma";
const createMeal = async (payload, userId) => {
    const { categoryName, ...rest } = payload;
    const providerProfile = await prisma.providerProfile.findUnique({
        where: { userId }
    });
    if (!providerProfile)
        throw new Error("Provider profile not found!");
    return await prisma.meal.create({
        data: {
            name: rest.name,
            description: rest.description,
            price: Number(rest.price),
            imageUrl: rest.imageUrl,
            provider: {
                connect: { id: providerProfile.id }
            },
            category: {
                connect: { name: categoryName }
            }
        },
        include: {
            category: true,
            provider: true
        }
    });
};
const getAllMeals = async (filters) => {
    const { searchTerm, category, minPrice, maxPrice } = filters;
    const where = { isAvailable: true }; // শুধু যেসব খাবার স্টকে আছে
    // ১. সার্চ টার্ম (নাম বা ডেসক্রিপশনে খুঁজবে)
    if (searchTerm) {
        where.OR = [
            { name: { contains: searchTerm, mode: 'insensitive' } },
            { description: { contains: searchTerm, mode: 'insensitive' } },
        ];
    }
    if (category) {
        where.category = { name: category.toUpperCase() };
    }
    if (minPrice || maxPrice) {
        where.price = {};
        if (minPrice)
            where.price.gte = Number(minPrice);
        if (maxPrice)
            where.price.lte = Number(maxPrice);
    }
    return await prisma.meal.findMany({
        where,
        include: { category: true, provider: true },
        orderBy: { createdAt: 'desc' }
    });
};
const getSingleMeal = async (mealId) => {
    const result = await prisma.meal.findUnique({
        where: { id: mealId },
        include: { provider: true, category: true }
    });
    if (!result)
        throw new Error("Meal not found!!");
    return result;
};
const updateMeal = async (mealId, userId, payload) => {
    const meal = await prisma.meal.findUnique({
        where: { id: mealId },
        include: { provider: true }
    });
    if (!meal || meal.provider.userId !== userId) {
        throw new Error("You are not authorized to update this meal!");
    }
    return await prisma.meal.update({
        where: { id: mealId },
        data: payload
    });
};
const deleteMeal = async (mealId, userId) => {
    const meal = await prisma.meal.findUnique({
        where: { id: mealId },
        include: { provider: true }
    });
    if (!meal || meal.provider.userId !== userId) {
        throw new Error("You are not authorized to delete this meal!");
    }
    return await prisma.meal.delete({ where: { id: mealId } });
};
export const MealsService = {
    createMeal,
    getAllMeals,
    getSingleMeal,
    updateMeal,
    deleteMeal
};
//# sourceMappingURL=meals.service.js.map