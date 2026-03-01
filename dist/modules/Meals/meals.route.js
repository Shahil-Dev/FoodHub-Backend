import express from 'express';
import auth, { UserRole } from '../../middleware/auth';
import { MealsController } from './meals.controller';
const router = express.Router();
router.get("/", MealsController.getAllMeals);
router.get("/:id", MealsController.getSingleMeal);
router.post("/create-meal", auth(UserRole.PROVIDER), MealsController.createMeals);
router.patch("/:id", auth(UserRole.PROVIDER), MealsController.updateMeal);
router.delete("/:id", auth(UserRole.PROVIDER), MealsController.deleteMeal);
export const MealsRoutes = router;
//# sourceMappingURL=meals.route.js.map