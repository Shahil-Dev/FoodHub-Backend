import express, { Application, Request, Response } from "express";
import cors from "cors";
import { postRouter } from "./modules/post.router";
import router from "./routes";

const app: Application = express();

app.use(express.json());

import cors from "cors";

app.use(cors({
    origin: [
      "http://localhost:3000", 
      "https://assignment-4-backend-hvp6vrkn2-shahil777s-projects.vercel.app" 
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"]
}));

app.use("/api/v1", router);
app.use("/posts", postRouter.router);

app.get("/", (req: Request, res: Response) => {
    res.send("Server is running smoothly! 🚀");
});

export default app;