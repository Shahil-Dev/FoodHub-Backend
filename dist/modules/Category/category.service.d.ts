export declare const CategoryService: {
    seedCategories: () => Promise<{
        message: string;
    }>;
    getAllCategories: () => Promise<{
        id: string;
        name: import(".prisma/client").$Enums.CategoryName;
    }[]>;
};
//# sourceMappingURL=category.service.d.ts.map