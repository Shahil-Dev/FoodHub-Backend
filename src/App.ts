import express, { Application, Request, Response } from "express";
import cors from "cors";
import { postRouter } from "./modules/post.router";
import router from "./routes";

const app: Application = express();

app.use(express.json());

app.use(cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], 
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/api/v1", router);
app.use("/posts", postRouter.router);

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running smoothly! 🚀");
});

export default app;