import express from "express";
import { postRouter } from "./modules/post.router";
import { AuthRoutes } from "./modules/Auth/auth.route";
import { MealsRoutes } from "./modules/Meals/meals.route";
import router from "./routes";

const app = express();
app.use(express.json());


app.use("/api/v1",router)

app.use("/posts", postRouter.router)


app.get("/", (req, res) => {
    res.send("Hello, World!");
});
export default app;

