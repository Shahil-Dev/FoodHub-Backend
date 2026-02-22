import express from "express";
import { postRouter } from "./modules/post.router";
import { AuthRoutes } from "./modules/Auth/auth.route";
import { MealsRoutes } from "./modules/Meals/meals.route";

const app = express();
app.use(express.json());


app.use("/posts", postRouter.router)
app.use("/api/v1/auth", AuthRoutes)
app.use("/api/v1/meals", MealsRoutes)

app.get("/", (req, res) => {
    res.send("Hello, World!");
});
export default app;

