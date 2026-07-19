"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderProfileController = void 0;
const providerProfile_service_1 = require("./providerProfile.service");
const sendResponse = (res, data) => {
    res.status(data.statusCode).json({
        success: data.success,
        message: data.message,
        data: data.data,
    });
};
const createProviderProfile = async (req, res) => {
    try {
        const user = req.user;
        const result = await providerProfile_service_1.ProviderProfileService.createProviderProfile(user.id, req.body);
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "Provider Profile created successfully",
            data: result
        });
    }
    catch (error) {
        sendResponse(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Failed to create profile"
        });
    }
};
const getAllProviders = async (req, res) => {
    try {
        const result = await providerProfile_service_1.ProviderProfileService.getAllProviders();
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "All providers fetched successfully",
            data: result
        });
    }
    catch (error) {
        sendResponse(res, {
            statusCode: 400,
            success: false,
            message: error.message || "Failed to fetch providers"
        });
    }
};
const getSingleProviderMeal = async (req, res) => {
    try {
        const userId = req.user.id;
        const mealId = req.params.id;
        const result = await providerProfile_service_1.ProviderProfileService.getSingleProviderMeal(userId, mealId);
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Meal fetched successfully",
            data: result
        });
    }
    catch (error) {
        sendResponse(res, {
            statusCode: 404,
            success: false,
            message: error.message || "Meal not found"
        });
    }
};
exports.ProviderProfileController = {
    createProviderProfile,
    getAllProviders,
    getSingleProviderMeal
};
//# sourceMappingURL=providerProfile.controller.js.map