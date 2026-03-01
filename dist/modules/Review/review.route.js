import express from 'express';
import { ReviewController } from './review.controller';
import auth, { UserRole } from '../../middleware/auth';
const router = express.Router();
router.post('/create-review', auth(UserRole.CUSTOMER), ReviewController.createReview);
router.get('/:mealId', ReviewController.getMealReviews);
export const ReviewRoutes = router;
//# sourceMappingURL=review.route.js.map