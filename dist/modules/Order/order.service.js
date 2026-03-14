"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const prisma_1 = require("../../lib/prisma");
const createOrder = async (userId, payload) => {
    const { items, deliveryAddress } = payload;
    const result = await prisma_1.prisma.$transaction(async (tx) => {
        let totalAmount = 0;
        const orderItemsData = [];
        for (const item of items) {
            const meal = await tx.meal.findUnique({
                where: { id: item.mealId }
            });
            if (!meal)
                throw new Error(`Meal with ID ${item.mealId} not found!`);
            totalAmount += meal.price * item.quantity;
            orderItemsData.push({
                mealId: item.mealId,
                quantity: item.quantity,
                price: meal.price
            });
        }
        const newOrder = await tx.order.create({
            data: {
                customerId: userId,
                deliveryAddress,
                totalAmount,
                status: 'PLACED',
                providerId: (await tx.meal.findUnique({ where: { id: items[0].mealId } }))?.providerId,
                items: {
                    create: orderItemsData
                }
            },
            include: {
                items: true
            }
        });
        return newOrder;
    });
    return result;
};
const getMyOrders = async (userId) => {
    return await prisma_1.prisma.order.findMany({
        where: { customerId: userId },
        include: {
            items: { include: { meal: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
};
const getProviderOrders = async (userId) => {
    const providerProfile = await prisma_1.prisma.providerProfile.findUnique({
        where: { userId }
    });
    if (!providerProfile)
        throw new Error("Provider profile not found!");
    return await prisma_1.prisma.order.findMany({
        where: { providerId: providerProfile.id },
        include: {
            items: { include: { meal: true } },
            customer: { select: { name: true, email: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
};
const updateOrderStatus = async (orderId, status) => {
    return await prisma_1.prisma.order.update({
        where: { id: orderId },
        data: { status: status }
    });
};
exports.OrderService = {
    createOrder,
    getMyOrders,
    getProviderOrders,
    updateOrderStatus
};
//# sourceMappingURL=order.service.js.map