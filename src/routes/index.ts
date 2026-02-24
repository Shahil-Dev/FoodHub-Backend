import { Router } from "express";
import { MealsRoutes } from "../modules/Meals/meals.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { ProviderProfileRoutes } from "../modules/ProviderProfile/providerProfile.route";

const router = Router();



const routeManager = [{
    path: "/auth",
    routes: AuthRoutes
},
{
    path: "/meals",
    routes: MealsRoutes
},
{
    path: "/ProviderProfile",
    routes: ProviderProfileRoutes
}
]


routeManager.forEach((r) => {
    router.use(r.path, r.routes)
})


export default router;