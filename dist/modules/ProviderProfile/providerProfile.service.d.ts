export declare const ProviderProfileService: {
    createProviderProfile: (userId: string, payload: any) => Promise<{
        id: string;
        description: string | null;
        userId: string;
        businessName: string;
        address: string;
        logoUrl: string | null;
    }>;
    getAllProviderMeals: (userId: string) => Promise<({
        category: {
            id: string;
            name: import("@prisma/client").$Enums.CategoryName;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: number;
        imageUrl: string | null;
        isAvailable: boolean;
        categoryId: string;
        providerId: string;
    })[]>;
    getSingleProviderMeal: (userId: string, mealId: string) => Promise<{
        category: {
            id: string;
            name: import("@prisma/client").$Enums.CategoryName;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string;
        price: number;
        imageUrl: string | null;
        isAvailable: boolean;
        categoryId: string;
        providerId: string;
    }>;
};
//# sourceMappingURL=providerProfile.service.d.ts.map