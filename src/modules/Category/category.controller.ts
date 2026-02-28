import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const seedCategories = async (req: Request, res: Response) => {
    try {
        const result = await CategoryService.seedCategories();
        res.status(200).json({
            success: true,
            message: "Categories seeded successfully!",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
};

const getAllCategories = async (req: Request, res: Response) => {
    try {
        const result = await CategoryService.getAllCategories();
        res.status(200).json({
            success: true,
            message: "Categories fetched successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
};

export const CategoryController = {
    seedCategories,
    getAllCategories
};