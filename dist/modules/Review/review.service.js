"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const prisma_1 = require("../../lib/prisma");
const createReview = async (userId, payload) => {
    const { mealId, orderId, rating, comment } = payload;
    const order = await prisma_1.prisma.order.findUnique({
        where: { id: orderId }
    });
    if (!order || order.customerId !== userId) {
        throw new Error("You cannot review an order that isn't yours!");
    }
    return await prisma_1.prisma.review.create({
        data: {
            rating: Number(rating),
            comment,
            customerId: userId,
            mealId,
            orderId
        }
    });
};
const getMealReviews = async (mealId) => {
    return await prisma_1.prisma.review.findMany({
        where: { mealId },
        include: {
            customer: { select: { name: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
};
exports.ReviewService = {
    createReview,
    getMealReviews
};
//# sourceMappingURL=review.service.js.map