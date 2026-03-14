"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_1 = require("../middleware/auth");
const prisma_1 = require("../lib/prisma");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const seedAdmin = async () => {
    const adminName = process.env.SUPER_ADMIN_NAME;
    const adminEmail = process.env.SUPER_ADMIN_EMAIL;
    const adminPassword = process.env.SUPER_ADMIN_PASSWORD;
    if (!adminEmail || !adminPassword) {
        console.error("Admin credentials are missing in .env file!");
        return;
    }
    const hashPassword = await bcryptjs_1.default.hashSync(adminPassword, 10);
    const adminData = {
        name: adminName || "Admin",
        email: adminEmail,
        password: hashPassword,
        role: auth_1.UserRole.ADMIN
    };
    try {
        const isExist = await prisma_1.prisma.user.findUnique({
            where: { email: adminData.email }
        });
        if (isExist) {
            console.log("Admin already exist!!!");
            return;
        }
        await prisma_1.prisma.user.create({
            data: adminData
        });
        console.log("Admin created successfully!!!!");
    }
    catch (error) {
        console.error("Error seeding admin:", error);
    }
    finally {
        await prisma_1.prisma.$disconnect();
    }
};
seedAdmin();
//# sourceMappingURL=seedAdmin.js.map