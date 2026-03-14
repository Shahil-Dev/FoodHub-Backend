"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const prisma_1 = require("../../lib/prisma");
const seedCategories = async () => {
    const categories = ["BREAKFAST", "LUNCH", "DINNER", "SNACKS", "BEVERAGES", "DESSERT"];
    for (const name of categories) {
        await prisma_1.prisma.category.upsert({
            where: { name: name },
            update: {},
            create: { name: name }
        });
    }
    return { message: "Categories seeded successfully!" };
};
const getAllCategories = async () => {
    return await prisma_1.prisma.category.findMany();
};
exports.CategoryService = { seedCategories, getAllCategories };
//# sourceMappingURL=category.service.js.map