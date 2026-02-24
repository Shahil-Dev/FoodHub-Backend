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

export const ProviderProfileController = {
    createProviderProfile
};