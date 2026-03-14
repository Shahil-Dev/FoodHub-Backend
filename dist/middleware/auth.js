"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRole = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma_1 = require("../lib/prisma");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["CUSTOMER"] = "CUSTOMER";
    UserRole["PROVIDER"] = "PROVIDER";
})(UserRole || (exports.UserRole = UserRole = {}));
const auth = (...roles) => {
    return async (req, res, next) => {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                throw new Error("Token not found!!");
            }
            const token = authHeader.startsWith("Bearer ")
                ? authHeader.split(" ")[1]
                : authHeader;
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET_KEY);
            const userData = await prisma_1.prisma.user.findUnique({
                where: { email: decoded.email },
            });
            if (!userData) {
                throw new Error("Unauthorized! User does not exist.");
            }
            if (roles.length && !roles.includes(decoded.role)) {
                throw new Error("Unauthorized!!! You don't have permission.");
            }
            req.user = decoded;
            next();
        }
        catch (error) {
            res.status(401).json({
                success: false,
                message: error.message || "Unauthorized",
            });
        }
    };
};
exports.default = auth;
//# sourceMappingURL=auth.js.map