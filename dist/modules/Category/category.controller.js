"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("./category.service");
const seedCategories = async (req, res) => {
    try {
        const result = await category_service_1.CategoryService.seedCategories();
        res.status(200).json({
            success: true,
            message: "Categories seeded successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
};
const getAllCategories = async (req, res) => {
    try {
        const result = await category_service_1.CategoryService.getAllCategories();
        res.status(200).json({
            success: true,
            message: "Categories fetched successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
};
exports.CategoryController = {
    seedCategories,
    getAllCategories
};
//# sourceMappingURL=category.controller.js.map