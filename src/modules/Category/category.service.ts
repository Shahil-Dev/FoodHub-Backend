import { prisma } from "../../lib/prisma";

const seedCategories = async () => {
    const categories = ["BREAKFAST", "LUNCH", "DINNER", "SNACKS", "BEVERAGES", "DESSERT"];

    for (const name of categories) {
        await prisma.category.upsert({
            where: { name: name as any },
            update: {},
            create: { name: name as any }
        });
    }
    return { message: "Categories seeded successfully!" };
};

const getAllCategories = async () => {
    return await prisma.category.findMany();
};

export const CategoryService = { seedCategories, getAllCategories };




