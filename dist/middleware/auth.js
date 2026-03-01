import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma";
export var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["CUSTOMER"] = "CUSTOMER";
    UserRole["PROVIDER"] = "PROVIDER";
})(UserRole || (UserRole = {}));
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
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            const userData = await prisma.user.findUnique({
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
export default auth;
//# sourceMappingURL=auth.js.map