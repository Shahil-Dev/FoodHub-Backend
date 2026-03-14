"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meals_route_1 = require("../modules/Meals/meals.route");
const auth_route_1 = require("../modules/Auth/auth.route");
const providerProfile_route_1 = require("../modules/ProviderProfile/providerProfile.route");
const category_route_1 = require("../modules/Category/category.route");
const order_route_1 = require("../modules/Order/order.route");
const review_route_1 = require("../modules/Review/review.route");
const admin_route_1 = require("../modules/Admin/admin.route");
const router = (0, express_1.Router)();
const routeManager = [{
        path: "/auth",
        routes: auth_route_1.AuthRoutes
    },
    {
        path: "/meals",
        routes: meals_route_1.MealsRoutes
    },
    {
        path: "/ProviderProfile",
        routes: providerProfile_route_1.ProviderProfileRoutes
    },
    {
        path: "/category",
        routes: category_route_1.CategoryRoutes
    },
    {
        path: "/orders",
        routes: order_route_1.OrderRoutes
    },
    {
        path: "/reviews",
        routes: review_route_1.ReviewRoutes
    },
    {
        path: "/admin",
        routes: admin_route_1.AdminRoutes
    }
];
routeManager.forEach((r) => {
    router.use(r.path, r.routes);
});
exports.default = router;
//# sourceMappingURL=index.js.map