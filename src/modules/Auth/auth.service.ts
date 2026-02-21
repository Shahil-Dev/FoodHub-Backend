import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import jwt from "jsonwebtoken";

const createUser = async (payload: any) => {
    const hashPassword = await bcrypt.hash(payload.password, 10);

    const result = await prisma.user.create({
        data: { ...payload, password: hashPassword }
    });

    const userData = {
        id: result.id,
        name: result.name,
        email: result.email,
        role: result.role
    };

    const token = jwt.sign(
        userData,
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1h" }
    );

    const { password, ...userWithoutPassword } = result;

    return {
        token,
        user: userWithoutPassword
    };
};

const loginUser = async (payload: any) => {
    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        }
    });

    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordMatched = await bcrypt.compare(
        payload.password,
        user.password
    );

    if (!isPasswordMatched) {
        throw new Error("Incorrect password");
    }

    const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
    };

    const token = jwt.sign(
        userData,
        process.env.JWT_SECRET_KEY as string,
        { expiresIn: "1h" }
    );

    const { password, ...userWithoutPassword } = user;

    return {
        token,
        user: userWithoutPassword
    };
};

export const AuthService = {
    createUser,
    loginUser
};