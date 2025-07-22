"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.appConfig = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    databaseUrl: process.env.DATABASE_URL,
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    },
    bcryptSaltRounds: Number(process.env.BCRYPT_SALT_ROUNDS) || 10,
    sslcommerz: {
        storeId: process.env.SSLC_STORE_ID || '',
        storePassword: process.env.SSLC_STORE_PASSWORD || '',
        isLive: process.env.SSLC_IS_LIVE === 'true',
    },
};
