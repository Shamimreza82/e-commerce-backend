"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthServices = void 0;
const db_config_1 = require("../../config/db.config");
const register = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield db_config_1.prisma.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: payload.password,
        },
    });
    return result;
});
exports.AuthServices = {
    register,
};
