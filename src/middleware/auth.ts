import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../lib/prisma";

// Role enum definitions
export enum UserRole {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
    PROVIDER = "PROVIDER",
}

// JWT Payload interface
export interface CustomJwtPayload extends JwtPayload {
    email: string;
    role: UserRole;
}

// Express Request type expansion
declare global {
    namespace Express {
        interface Request {
            user?: CustomJwtPayload;
        }
    }
}

const auth = (...roles: UserRole[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
           
            const token = req.headers.authorization;

            if (!token) {
                throw new Error("Token not found!!");
            }

            // 2. Verify token
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET_KEY!
            ) as CustomJwtPayload;

            // 3. Check if user exists in database
            const userData = await prisma.user.findUnique({
                where: { email: decoded.email },
            });

            if (!userData) {
                throw new Error("Unauthorized! User does not exist.");
            }

            // 4. Check user status (Active kina)


            if (roles.length && !roles.includes(decoded.role)) {
                throw new Error("Unauthorized!!! You don't have permission.");
            }

            // 6. Set user to request object
            req.user = decoded;

            next();
        } catch (error: any) {
            res.status(401).json({
                success: false,
                message: error.message || "Unauthorized",
            });
        }
    };
};

export default auth;