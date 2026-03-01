import express from 'express';
import { CategoryController } from './category.controller';
import auth, { UserRole } from '../../middleware/auth';
const router = express.Router();
router.post('/', auth(UserRole.ADMIN), CategoryController.seedCategories);
router.get('/', CategoryController.getAllCategories);
export const CategoryRoutes = router;
//# sourceMappingURL=category.route.js.map