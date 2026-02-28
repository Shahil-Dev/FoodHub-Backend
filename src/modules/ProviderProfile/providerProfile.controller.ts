import { Request, Response } from "express";
import { ProviderProfileService } from "./providerProfile.service";

const createProviderProfile = async (req: Request, res: Response) => {
    try {
        const user = (req as any).user; 
        const result = await ProviderProfileService.createProviderProfile(user.id, req.body);
        
        res.status(201).json({
            success: true,
            message: "Provider Profile created successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
};


const getAllProviderMeals = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id; 
        const result = await ProviderProfileService.getAllProviderMeals(userId);

        res.status(200).json({
            success: true,
            message: "Provider meals fetched successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
};

const getSingleProviderMeal = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const mealId = req.params.id;
        const result = await ProviderProfileService.getSingleProviderMeal(userId, mealId as string);

        res.status(200).json({
            success: true,
            message: "Meal fetched successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
};

export const ProviderProfileController = {
    createProviderProfile,
    getAllProviderMeals,
    getSingleProviderMeal
};