export declare const MealsService: {
    createMeal: (payload: any, userId: string) => Promise<{
        category: {
            id: string;
            name: import(".prisma/client").$Enums.CategoryName;
        };
        provider: {
            id: string;
            description: string | null;
            userId: string;
            businessName: string;
            address: string;
            logoUrl: string | null;
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
    getAllMeals: (filters: any) => Promise<({
        category: {
            id: string;
            name: import(".prisma/client").$Enums.CategoryName;
        };
        provider: {
            id: string;
            description: string | null;
            userId: string;
            businessName: string;
            address: string;
            logoUrl: string | null;
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
    getSingleMeal: (mealId: string) => Promise<{
        category: {
            id: string;
            name: import(".prisma/client").$Enums.CategoryName;
        };
        provider: {
            id: string;
            description: string | null;
            userId: string;
            businessName: string;
            address: string;
            logoUrl: string | null;
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
    updateMeal: (mealId: string, userId: string, payload: any) => Promise<{
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
    deleteMeal: (mealId: string, userId: string) => Promise<{
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
//# sourceMappingURL=meals.service.d.ts.map