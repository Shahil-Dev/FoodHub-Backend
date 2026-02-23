import bcrypt from "bcryptjs";
import { UserRole } from "../middleware/auth";
import { prisma } from "../lib/prisma";
import dotenv from "dotenv";

dotenv.config();

const seedAdmin = async () => {
    const adminName = process.env.SUPER_ADMIN_NAME;
    const adminEmail = process.env.SUPER_ADMIN_EMAIL;
    const adminPassword = process.env.SUPER_ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
        console.error("Admin credentials are missing in .env file!");
        return;
    }

    const hashPassword = await bcrypt.hashSync(adminPassword, 10);

    const adminData = {
        name: adminName ,
        email: adminEmail,
        password: hashPassword,
        role: UserRole.ADMIN
    }

    try {
        const isExist = await prisma.user.findUnique({
            where: { email: adminData.email }
        });

        if (isExist) {
            console.log("Admin already exist!!!")
            return;
        }

        await prisma.user.create({
            data: adminData
        })

        console.log("Admin created successfully!!!!")

    } catch (error) {
        console.error("Error seeding admin:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seedAdmin();