"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../../lib/prisma");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createUser = async (payload) => {
    const hashPassword = await bcryptjs_1.default.hash(payload.password, 10);
    const result = await prisma_1.prisma.user.create({
        data: { ...payload, password: hashPassword }
    });
    const userData = {
        id: result.id,
        name: result.name,
        email: result.email,
        role: result.role
    };
    const token = jsonwebtoken_1.default.sign(userData, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
    const { password, ...userWithoutPassword } = result;
    return {
        token,
        user: userWithoutPassword
    };
};
const loginUser = async (payload) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: {
            email: payload.email
        }
    });
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordMatched = await bcryptjs_1.default.compare(payload.password, user.password);
    if (!isPasswordMatched) {
        throw new Error("Incorrect password");
    }
    const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };
    const token = jsonwebtoken_1.default.sign(userData, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
    const { password, ...userWithoutPassword } = user;
    return {
        token,
        user: userWithoutPassword
    };
};
exports.AuthService = {
    createUser,
    loginUser
};
//# sourceMappingURL=auth.service.js.map