import express from 'express';
import { ProviderProfileController } from './providerProfile.controller';
import auth, { UserRole } from '../../middleware/auth';
const router = express.Router();
router.post('/ProviderProfile', auth(UserRole.PROVIDER), ProviderProfileController.createProviderProfile);
router.get('/ProviderProfile', auth(UserRole.PROVIDER), ProviderProfileController.getAllProviderMeals);
router.get('/ProviderProfile/:id', auth(UserRole.PROVIDER), ProviderProfileController.getSingleProviderMeal);
export const ProviderProfileRoutes = router;
//# sourceMappingURL=providerProfile.route.js.map