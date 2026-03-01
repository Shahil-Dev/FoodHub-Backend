export declare const ReviewService: {
    createReview: (userId: string, payload: any) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        mealId: string;
        orderId: string;
        rating: number;
        comment: string;
    }>;
    getMealReviews: (mealId: string) => Promise<({
        customer: {
            name: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        customerId: string;
        mealId: string;
        orderId: string;
        rating: number;
        comment: string;
    })[]>;
};
//# sourceMappingURL=review.service.d.ts.map