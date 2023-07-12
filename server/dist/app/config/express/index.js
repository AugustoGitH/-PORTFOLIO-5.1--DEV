"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
const env_1 = __importDefault(require("../../constants/env"));
const routers_1 = __importDefault(require("../../routers"));
const constants_1 = __importDefault(require("./constants"));
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(body_parser_1.default.json({ limit: '9999999999mb' }));
app.use(body_parser_1.default.urlencoded({ limit: '9999999999mb', extended: true }));
app.use(constants_1.default.BASE_ROUTES_API, routers_1.default);
if (env_1.default.MODE !== 'development') {
    app.use(express_1.default.static(path_1.default.join(__dirname, '../../../../../client/dist')));
    app.get('*', (req, res) => {
        try {
            res.sendFile(path_1.default.join(__dirname, '../../../../../client/dist/index.html'));
        }
        catch (e) {
            console.log(e);
        }
    });
}
app.listen(env_1.default.PORT, () => {
    console.log(`Server ${env_1.default.MODE} running on port ${env_1.default.PORT}.`);
});
