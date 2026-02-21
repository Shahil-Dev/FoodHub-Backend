import express from "express";
import { postRouter } from "./modules/post.router";

const app = express();
app.use(express.json());


app.use("/posts", postRouter.router)


app.get("/", (req, res) => {
    res.send("Hello, World!");
});
export default app;