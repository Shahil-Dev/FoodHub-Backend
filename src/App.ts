import express, { Application, Request, Response } from "express";

import cors from "cors";

import { postRouter } from "./modules/post.router";

import router from "./routes";

import cookieParser from "cookie-parser";

const app: Application = express();

app.use(express.json());

app.use(cookieParser());

app.use(
  cors({
    origin: [
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
  }),
);

app.options("/", cors());

app.use("/api/v1", router);

app.use("/posts", postRouter.router);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running smoothly! 🚀");
});

export default app;
