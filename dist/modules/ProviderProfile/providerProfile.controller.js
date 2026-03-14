"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderProfileController = void 0;
const providerProfile_service_1 = require("./providerProfile.service");
const createProviderProfile = async (req, res) => {
    try {
        const user = req.user;
        const result = await providerProfile_service_1.ProviderProfileService.createProviderProfile(user.id, req.body);
        res.status(201).json({
            success: true,
            message: "Provider Profile created successfully",
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
const getAllProviderMeals = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await providerProfile_service_1.ProviderProfileService.getAllProviderMeals(userId);
        res.status(200).json({
            success: true,
            message: "Provider meals fetched successfully",
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
const getSingleProviderMeal = async (req, res) => {
    try {
        const userId = req.user.id;
        const mealId = req.params.id;
        const result = await providerProfile_service_1.ProviderProfileService.getSingleProviderMeal(userId, mealId);
        res.status(200).json({
            success: true,
            message: "Meal fetched successfully",
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
exports.ProviderProfileController = {
    createProviderProfile,
    getAllProviderMeals,
    getSingleProviderMeal
};
//# sourceMappingURL=providerProfile.controller.js.map