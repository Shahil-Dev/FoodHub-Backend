import express from 'express';
import { OrderController } from './order.controller';
import auth, { UserRole } from '../../middleware/auth';

const router = express.Router();

router.post(
    '/create-order',
    auth(UserRole.CUSTOMER),
    OrderController.createOrder
);

router.get(
    '/my-orders',
    auth(UserRole.CUSTOMER),
    OrderController.getMyOrders
);
router.get(
    '/provider-orders',
    auth(UserRole.PROVIDER),
    OrderController.getProviderOrders
);

router.patch(
    '/update-status/:orderId',
    auth(UserRole.PROVIDER),
    OrderController.updateOrderStatus
);

export const OrderRoutes = router;