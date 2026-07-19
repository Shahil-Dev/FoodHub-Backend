export declare const ProviderProfileService: {
    createProviderProfile: (userId: string, payload: any) => Promise<{
        id: string;
        description: string | null;
        userId: string;
        businessName: string;
        address: string;
        logoUrl: string | null;
    }>;
    getAllProviders: () => Promise<({
        user: {
            email: string;
            name: string;
        };
    } & {
        id: string;
        description: string | null;
        userId: string;
        businessName: string;
        address: string;
        logoUrl: string | null;
    })[]>;
    getSingleProviderMeal: (userId: string, mealId: string) => Promise<{
        category: {
            id: string;
            name: import(".prisma/client").$Enums.CategoryName;
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