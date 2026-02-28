import { prisma } from "../../lib/prisma";

const createOrder = async (userId: string, payload: any) => {
    const { items, deliveryAddress } = payload;
    const result = await prisma.$transaction(async (tx) => {
    let totalAmount = 0;

        const orderItemsData = [];

        for (const item of items) {
            const meal = await tx.meal.findUnique({
                where: { id: item.mealId }
            });

            if (!meal) throw new Error(`Meal with ID ${item.mealId} not found!`);

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

                providerId: (await tx.meal.findUnique({ where: { id: items[0].mealId } }))?.providerId as string,
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

const getMyOrders = async (userId: string) => {
    return await prisma.order.findMany({
        where: { customerId: userId },
        include: {
            items: { include: { meal: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
};
const getProviderOrders = async (userId: string) => {
    const providerProfile = await prisma.providerProfile.findUnique({
        where: { userId }
    });

    if (!providerProfile) throw new Error("Provider profile not found!");

    return await prisma.order.findMany({
        where: { providerId: providerProfile.id },
        include: {
            items: { include: { meal: true } },
            customer: { select: { name: true, email: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
};

const updateOrderStatus = async (orderId: string, status: string) => {
    return await prisma.order.update({
        where: { id: orderId },
        data: { status: status as any }
    });
};
export const OrderService = {
    createOrder,
    getMyOrders,
    getProviderOrders,
    updateOrderStatus
};