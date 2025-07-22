"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandler_1 = require("./app/middleware/globalErrorHandler");
const rootRouter_1 = require("./app/rootRouter/rootRouter");
const notFound_middleware_1 = __importDefault(require("./app/middleware/notFound.middleware"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: ['http://localhost:3000', "http://localhost:4002"], // or your frontend domain
    credentials: true,
}));
// Your existing REST endpoints
app.use('/api/v1', rootRouter_1.RootRouter);
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version: process.env.nPM_PACKAGE_VERSION,
        environment: process.env.NODE_ENV,
        data: { message: 'API is up and running! 🚀' },
    });
});
app.use(notFound_middleware_1.default);
app.use(globalErrorHandler_1.globalErrorHandler);
exports.default = app;
