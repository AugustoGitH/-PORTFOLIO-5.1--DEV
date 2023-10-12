"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/first */
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const env_1 = __importDefault(require("./app/constants/env"));
const express_2 = require("./app/constants/express");
const routers_1 = __importDefault(require("./app/routers"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json({ limit: '9999999999mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '9999999999mb', extended: true }));
app.use(express_2.BASE_ROUTES_API, routers_1.default);
if (env_1.default.MODE !== 'development') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../client')));
    app.get('*', (req, res) => {
        try {
            res.sendFile(path_1.default.join(__dirname, '../client/index.html'));
        }
        catch (e) {
            console.log(e);
        }
    });
}
app.listen(env_1.default.PORT, () => {
    console.log(`Server ${env_1.default.MODE} running on port ${env_1.default.PORT}.`);
});
const { MODE, URL } = env_1.default.MONGO_CONNECTION_URL();
mongoose_1.default
    .connect(URL !== null && URL !== void 0 ? URL : '')
    .then(() => {
    console.log(`Database under ${MODE} running.`);
})
    .catch((error) => {
    console.log(error);
});
