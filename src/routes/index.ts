import { Router } from "express";
import { MealsRoutes } from "../modules/Meals/meals.route";
import { AuthRoutes } from "../modules/Auth/auth.route";

const router = Router();
// router.use("/auth", AuthRoutes)
// router.use("/meals", MealsRoutes)


const routeManager = [{
    path: "/auth",
    routes: AuthRoutes
},
{
    path: "/meals",
    routes: MealsRoutes
}]


routeManager.forEach((r) => {
    router.use(r.path, r.routes)
})


export default router;