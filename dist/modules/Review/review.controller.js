import { ReviewService } from "./review.service";
const createReview = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await ReviewService.createReview(userId, req.body);
        res.status(201).json({
            success: true,
            message: "Review submitted successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const getMealReviews = async (req, res) => {
    try {
        const { mealId } = req.params;
        const result = await ReviewService.getMealReviews(mealId);
        res.status(200).json({
            success: true,
            message: "Reviews fetched successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
export const ReviewController = { createReview, getMealReviews };
//# sourceMappingURL=review.controller.js.map