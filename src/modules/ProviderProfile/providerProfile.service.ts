import { prisma } from "../../lib/prisma";

const createProviderProfile = async (userId: string, payload: any) => {
    const isExist = await prisma.providerProfile.findUnique({
        where: { userId }
    });

    if (isExist) {
        throw new Error("Provider profile already exists for this user!");
    }

    const result = await prisma.providerProfile.create({
        data: {
            businessName: payload.businessName,
            address: payload.address,
            description: payload.description,
            logoUrl: payload.logoUrl,
            userId: userId
        }
    });

    return result;
};

export const ProviderProfileService = {
    createProviderProfile
};