import { NextFunction, Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
export declare enum UserRole {
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
    PROVIDER = "PROVIDER"
}
export interface CustomJwtPayload extends JwtPayload {
    id: string;
    email: string;
    role: UserRole;
}
declare const auth: (...roles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default auth;
//# sourceMappingURL=auth.d.ts.map