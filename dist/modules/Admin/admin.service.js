"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const prisma_1 = require("../../lib/prisma");
const getAllUsers = async () => {
    return await prisma_1.prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            status: true,
            createdAt: true
        }
    });
};
const updateUserStatus = async (userId, status) => {
    return await prisma_1.prisma.user.update({
        where: { id: userId },
        data: { status: status }
    });
};
const getAdminStats = async () => {
    const totalUsers = await prisma_1.prisma.user.count();
    const totalOrders = await prisma_1.prisma.order.count();
    const totalRevenue = await prisma_1.prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: { status: 'DELIVERED' }
    });
    return {
        totalUsers,
        totalOrders,
        totalRevenue: totalRevenue._sum.totalAmount || 0
    };
};
exports.AdminService = {
    getAllUsers,
    updateUserStatus,
    getAdminStats
};
//# sourceMappingURL=admin.service.js.map