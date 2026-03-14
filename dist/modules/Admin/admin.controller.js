"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const admin_service_1 = require("./admin.service");
const getAllUsers = async (req, res) => {
    try {
        const result = await admin_service_1.AdminService.getAllUsers();
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const updateUserStatus = async (req, res) => {
    try {
        const { userId } = req.params;
        const { status } = req.body;
        const result = await admin_service_1.AdminService.updateUserStatus(userId, status);
        res.status(200).json({ success: true, message: `User is now ${status}`, data: result });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
const getDashboardStats = async (req, res) => {
    try {
        const result = await admin_service_1.AdminService.getAdminStats();
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
exports.AdminController = { getAllUsers, updateUserStatus, getDashboardStats };
//# sourceMappingURL=admin.controller.js.map