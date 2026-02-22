import express from 'express';
import auth, { UserRole } from '../../middleware/auth';
import { MealsController } from './meals.controller';

const router = express.Router();

router.post(
    "/", 
    auth(UserRole.ADMIN), 
    MealsController.createMeals
);

export const MealsRoutes = router;