import { Router } from "express";
import { MealsRoutes } from "../modules/Meals/meals.route";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { ProviderProfileRoutes } from "../modules/ProviderProfile/providerProfile.route";
import { CategoryRoutes } from "../modules/Category/category.route";
import { OrderRoutes } from "../modules/Order/order.route";
import { ReviewRoutes } from "../modules/Review/review.route";
import { AdminRoutes } from "../modules/Admin/admin.route";

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
},
{
   path: "/category", 
    routes: CategoryRoutes
},
{
    path: "/orders",
    routes: OrderRoutes
},
{
    path: "/reviews",
    routes: ReviewRoutes
},
{
    path: "/admin",
    routes: AdminRoutes
}
]


routeManager.forEach((r) => {
    router.use(r.path, r.routes)
})


export default router;