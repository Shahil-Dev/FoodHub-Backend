import express from 'express';
import { AdminController } from './admin.controller';
import auth, { UserRole } from '../../middleware/auth';
const router = express.Router();
router.get('/users', auth(UserRole.ADMIN), AdminController.getAllUsers);
router.patch('/users/:userId/status', auth(UserRole.ADMIN), AdminController.updateUserStatus);
router.get('/stats', auth(UserRole.ADMIN), AdminController.getDashboardStats);
export const AdminRoutes = router;
//# sourceMappingURL=admin.route.js.map