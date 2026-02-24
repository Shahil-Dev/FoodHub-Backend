import express from 'express';
import auth, { UserRole } from '../../middleware/auth';
import { MealsController } from './meals.controller';

const router = express.Router();

router.post(
    "/",
    auth(UserRole.PROVIDER),
    MealsController.createMeals
);

router.get(
    "/",
    auth(UserRole.PROVIDER),
    MealsController.getAllMeals
);
router.get(
    "/:id",
    auth(UserRole.PROVIDER),
    MealsController.getSingleMeal
);

export const MealsRoutes = router;