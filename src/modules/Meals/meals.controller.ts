import { Request, Response } from "express";
import { MealsService } from "./meals.service";

const createMeals = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const result = await MealsService.createMeal(req.body, userId);
        res.status(201).json({
            success: true,
            message: "Meal created successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getAllMeals = async (req: Request, res: Response) => {
    try {
        const result = await MealsService.getAllMeals(req.query);
        res.status(200).json({
            success: true,
            message: "Meals fetched successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const getSingleMeal = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await MealsService.getSingleMeal(id as string);
        res.status(200).json({
            success: true,
            message: "Meal fetched successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};


const updateMeal = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = (req as any).user.id;
        const result = await MealsService.updateMeal(id as string, userId, req.body);
        res.status(200).json({
            success: true,
            message: "Meal updated successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

const deleteMeal = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const userId = (req as any).user.id;
        await MealsService.deleteMeal(id as string, userId);
        res.status(200).json({
            success: true,
            message: "Meal deleted successfully",
            data: null
        });
    } catch (error: any) {
        res.status(400).json({ success: false, message: error.message });
    }
};

export const MealsController = {
    createMeals,
    getAllMeals,
    getSingleMeal,
    updateMeal,
    deleteMeal
};