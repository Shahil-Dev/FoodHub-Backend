import { Request, Response } from "express";
import { MealsService } from "./meals.service";


const createMeals = async (req: Request, res: Response) => {
    try {
        console.log(req.user)
        const result = await MealsService.createMeal(req.body, req.user?.id!);
        res.status(200).json({
            success: true,
            message: "Meal created successfully",
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Unknown error"
        });
    }
};
const getAllMeals = async (req: Request, res: Response) => {
    try {
        console.log(req.user)
        const result = await MealsService.getAllMeals(req.user?.id!);
        res.status(200).json({
            success: true,
            message: "All meals retrieved successfully",
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Unknown error"
        });
    }
};



export const MealsController = {
    // Add controller methods here
    createMeals,
    getAllMeals
};