"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const router = (0, express_1.default)();
const routers = [
    {
        path: '/auth',
        handler: auth_route_1.AuthRouter,
    },
];
routers.forEach((route) => {
    router.use(route.path, route.handler);
});
exports.RootRouter = router;
