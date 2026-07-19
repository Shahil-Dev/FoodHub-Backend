"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const post_router_1 = require("./modules/post.router");
const routes_1 = __importDefault(require("./routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use(app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://assignment-4-frontend-b6q4.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Requested-With",
        "Accept",
    ],
})));
app.options("/", (0, cors_1.default)());
app.use("/api/v1", routes_1.default);
app.use("/posts", post_router_1.postRouter.router);
app.get("/", (req, res) => {
    res.send("Server is running smoothly! 🚀");
});
exports.default = app;
//# sourceMappingURL=App.js.map