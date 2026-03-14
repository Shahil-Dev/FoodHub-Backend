export declare const AuthService: {
    createUser: (payload: any) => Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
            name: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
    loginUser: (payload: any) => Promise<{
        token: string;
        user: {
            id: string;
            email: string;
            role: import(".prisma/client").$Enums.Role;
            name: string;
            status: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map