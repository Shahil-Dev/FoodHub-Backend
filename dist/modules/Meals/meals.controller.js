import { MealsService } from "./meals.service";
const createMeals = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await MealsService.createMeal(req.body, userId);
        res.status(201).json({
            success: true,
            message: "Meal created successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const getAllMeals = async (req, res) => {
    try {
        const result = await MealsService.getAllMeals(req.query);
        res.status(200).json({
            success: true,
            message: "Meals fetched successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const getSingleMeal = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await MealsService.getSingleMeal(id);
        res.status(200).json({
            success: true,
            message: "Meal fetched successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const updateMeal = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const result = await MealsService.updateMeal(id, userId, req.body);
        res.status(200).json({
            success: true,
            message: "Meal updated successfully",
            data: result
        });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const deleteMeal = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        await MealsService.deleteMeal(id, userId);
        res.status(200).json({
            success: true,
            message: "Meal deleted successfully",
            data: null
        });
    }
    catch (error) {
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
//# sourceMappingURL=meals.controller.js.map