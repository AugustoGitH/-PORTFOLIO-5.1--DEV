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
const uuid_1 = require("uuid");
const VerifyAndCreateTokenCustomerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { CUSTOMER_ID } = process.env;
    if (CUSTOMER_ID === undefined) {
        throw new Error('CUSTOMER_ID não se encontra nas variaveis de ambiente!');
    }
    const customerId = req.cookies[CUSTOMER_ID];
    if (customerId === undefined) {
        res.cookie(CUSTOMER_ID, (0, uuid_1.v4)(), {
            path: '/',
            secure: true,
            httpOnly: true,
        });
    }
    next();
});
exports.default = VerifyAndCreateTokenCustomerUser;
