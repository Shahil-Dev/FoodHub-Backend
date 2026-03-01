import { AuthService } from "./auth.service";
const createUser = async (req, res) => {
    try {
        const result = await AuthService.createUser(req.body);
        res.cookie("token", result.token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        });
        res.status(200).json({
            success: true,
            message: "User created successfully",
            data: result.user
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Unknown error"
        });
    }
};
const loginUser = async (req, res) => {
    try {
        const result = await AuthService.loginUser(req.body);
        res.cookie("token", result.token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        });
        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            data: result.user
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error instanceof Error ? error.message : "Unknown error"
        });
    }
};
export const AuthController = {
    createUser,
    loginUser
};
//# sourceMappingURL=auth.controller.js.map