"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_js_1 = __importDefault(require("./App.js"));
const prisma_js_1 = require("./lib/prisma.js");
const PORT = process.env.PORT || 5000;
async function main() {
    try {
        await prisma_js_1.prisma.$connect();
        console.log("Database connected successfully");
        if (process.env.NODE_ENV !== "production") {
            App_js_1.default.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        }
    }
    catch (error) {
        console.error("Database connection failed:", error);
    }
}
main();
exports.default = App_js_1.default;
//# sourceMappingURL=Server.js.map