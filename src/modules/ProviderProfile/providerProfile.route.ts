import express from 'express';

import { ProviderProfileController } from './providerProfile.controller';
import auth, { UserRole } from '../../middleware/auth';

const router = express.Router();

router.post(
    '/ProviderProfile',
    auth(UserRole.PROVIDER),
    ProviderProfileController.createProviderProfile
);

router.get(
    '/all-providers',
    ProviderProfileController.getAllProviders
);

router.get(
    '/ProviderProfile/:id',
    auth(UserRole.PROVIDER),
    ProviderProfileController.getSingleProviderMeal
);

export const ProviderProfileRoutes = router;



