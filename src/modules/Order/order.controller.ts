import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const result = await OrderService.createOrder(userId, req.body);

        res.status(201).json({
            success: true,
            message: "Order placed successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
};

const getMyOrders = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const result = await OrderService.getMyOrders(userId);

        res.status(200).json({
            success: true,
            message: "Orders fetched successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
};

const getProviderOrders = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id;
        const result = await OrderService.getProviderOrders(userId);

        res.status(200).json({
            success: true,
            message: "Provider orders fetched successfully",
            data: result
        });
    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
};

const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;
        const result = await OrderService.updateOrderStatus(orderId as string, status);

        res.status(200).json({
            success: true,
            message: "Order status updated successfully",
            data: result
        });
    } catch (error: any) {
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
