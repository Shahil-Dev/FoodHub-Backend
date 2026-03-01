import { OrderService } from "./order.service";
const createOrder = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await OrderService.createOrder(userId, req.body);
        res.status(201).json({
            success: true,
            message: "Order placed successfully",
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
const getMyOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await OrderService.getMyOrders(userId);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
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
const getProviderOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const result = await OrderService.getProviderOrders(userId);
        res.status(200).json({
            success: true,
            message: "Provider orders fetched successfully",
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
const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        const result = await OrderService.updateOrderStatus(orderId, status);
        res.status(200).json({
            success: true,
            message: "Order status updated successfully",
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
export const OrderController = {
    createOrder,
    getMyOrders,
    getProviderOrders,
    updateOrderStatus
};
//# sourceMappingURL=order.controller.js.map