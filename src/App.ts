import express, { Application, Request, Response } from "express";
import cors from "cors";
import { postRouter } from "./modules/post.router";
import router from "./routes";

const app: Application = express();

app.use(express.json());

app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://your-new-frontend-link.vercel.app"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
}));

app.options("/", cors());

app.use("/api/v1", router);
app.use("/posts", postRouter.router);

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running smoothly! 🚀");
});

export default app;