export declare const AdminService: {
    getAllUsers: () => Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        name: string;
        status: string;
        createdAt: Date;
    }[]>;
    updateUserStatus: (userId: string, status: string) => Promise<{
        id: string;
        email: string;
        role: import(".prisma/client").$Enums.Role;
        password: string;
        name: string;
        status: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAdminStats: () => Promise<{
        totalUsers: number;
        totalOrders: number;
        totalRevenue: number;
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map