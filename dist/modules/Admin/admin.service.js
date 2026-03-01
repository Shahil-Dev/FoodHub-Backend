import { prisma } from "../../lib/prisma";
const getAllUsers = async () => {
    return await prisma.user.findMany({
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
    return await prisma.user.update({
        where: { id: userId },
        data: { status: status }
    });
};
const getAdminStats = async () => {
    const totalUsers = await prisma.user.count();
    const totalOrders = await prisma.order.count();
    const totalRevenue = await prisma.order.aggregate({
        _sum: { totalAmount: true },
        where: { status: 'DELIVERED' }
    });
    return {
        totalUsers,
        totalOrders,
        totalRevenue: totalRevenue._sum.totalAmount || 0
    };
};
export const AdminService = {
    getAllUsers,
    updateUserStatus,
    getAdminStats
};
//# sourceMappingURL=admin.service.js.map