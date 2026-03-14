export declare const OrderService: {
    createOrder: (userId: string, payload: any) => Promise<{
        items: {
            id: string;
            price: number;
            quantity: number;
            mealId: string;
            orderId: string;
        }[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        totalAmount: number;
        deliveryAddress: string;
        customerId: string;
    }>;
    getMyOrders: (userId: string) => Promise<({
        items: ({
            meal: {
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
            };
        } & {
            id: string;
            price: number;
            quantity: number;
            mealId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        totalAmount: number;
        deliveryAddress: string;
        customerId: string;
    })[]>;
    getProviderOrders: (userId: string) => Promise<({
        customer: {
            email: string;
            name: string;
        };
        items: ({
            meal: {
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
            };
        } & {
            id: string;
            price: number;
            quantity: number;
            mealId: string;
            orderId: string;
        })[];
    } & {
        id: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        totalAmount: number;
        deliveryAddress: string;
        customerId: string;
    })[]>;
    updateOrderStatus: (orderId: string, status: string) => Promise<{
        id: string;
        status: import(".prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        providerId: string;
        totalAmount: number;
        deliveryAddress: string;
        customerId: string;
    }>;
};
//# sourceMappingURL=order.service.d.ts.map