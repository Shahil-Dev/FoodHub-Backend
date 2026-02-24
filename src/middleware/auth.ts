import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { prisma } from "../lib/prisma";

export enum UserRole {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
    PROVIDER = "PROVIDER",
}

export interface CustomJwtPayload extends JwtPayload {
    id: string;
    email: string;
    role: UserRole;
}

const auth = (...roles: UserRole[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const authHeader = req.headers.authorization;

            if (!authHeader) {
                throw new Error("Token not found!!");
            }

            const token = authHeader.startsWith("Bearer ") 
                ? authHeader.split(" ")[1] 
                : authHeader;

            const decoded = jwt.verify(
                token as string,
                process.env.JWT_SECRET_KEY!
            ) as unknown as CustomJwtPayload;

            const userData = await prisma.user.findUnique({
                where: { email: decoded.email },
            });

            if (!userData) {
                throw new Error("Unauthorized! User does not exist.");
            }

            if (roles.length && !roles.includes(decoded.role)) {
                throw new Error("Unauthorized!!! You don't have permission.");
            }

            (req as any).user = decoded;

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