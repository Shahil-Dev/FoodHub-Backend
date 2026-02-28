import { prisma } from "../../lib/prisma";

const createReview = async (userId: string, payload: any) => {
    const { mealId, orderId, rating, comment } = payload;

    // চেক করা যে ইউজার আসলেই এই অর্ডারটি করেছে কি না এবং অর্ডারটি ডেলিভার হয়েছে কি না
    const order = await prisma.order.findUnique({
        where: { id: orderId }
    });

    if (!order || order.customerId !== userId) {
        throw new Error("You cannot review an order that isn't yours!");
    }

    return await prisma.review.create({
        data: {
            rating: Number(rating),
            comment,
            customerId: userId,
            mealId,
            orderId
        }
    });
};

const getMealReviews = async (mealId: string) => {
    return await prisma.review.findMany({
        where: { mealId },
        include: {
            customer: { select: { name: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
};

export const ReviewService = {
    createReview,
    getMealReviews
};