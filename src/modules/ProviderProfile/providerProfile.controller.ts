import { Request, Response, NextFunction } from "express";
import { ProviderProfileService } from "./providerProfile.service";

const sendResponse = (res: Response, data: { statusCode: number; success: boolean; message: string; data?: any }) => {
    res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data,
    });
};

const createProviderProfile = async (req: Request, res: Response) => {
    try {
        const user = (req as any).user; 
        const result = await ProviderProfileService.createProviderProfile(user.id, req.body);
        
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "Provider Profile created successfully",
            data: result
        });
    } catch (error: any) {
        sendResponse(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Failed to create profile"
        });
    }
};

const getAllProviders = async (req: Request, res: Response) => {
    try {
        const result = await ProviderProfileService.getAllProviders();
        
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "All providers fetched successfully",
            data: result
        });
    } catch (error: any) {
        sendResponse(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Failed to fetch providers"
        });
    }
};

const getSingleProviderMeal = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const mealId = req.params.id;
        const result = await ProviderProfileService.getSingleProviderMeal(userId, mealId as string);

        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Meal fetched successfully",
            data: result
        });
    } catch (error: any) {
        sendResponse(res, {
            statusCode: 404, 
            success: false,
            message: error.message || "Meal not found"
        });
    }
};

export const ProviderProfileController = {
    createProviderProfile,
    getAllProviders,
    getSingleProviderMeal
};