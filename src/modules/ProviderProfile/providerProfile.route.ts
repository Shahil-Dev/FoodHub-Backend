import express from 'express';
import { ProviderProfileController } from './providerProfile.controller';
import auth, { UserRole } from '../../middleware/auth';

const router = express.Router();

router.post(
    "/", 
    auth(UserRole.PROVIDER), 
    ProviderProfileController.createProviderProfile
);

export const ProviderProfileRoutes = router;