"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const env = {
    PORT: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : String(3000),
    MODE: (_b = process.env.MODE) !== null && _b !== void 0 ? _b : 'development',
    API_ROUTE_GITHUB: 'https://api.github.com/users/AugustoGitH/repos',
    MONGO_CONNECTION_URL: function () {
        var _a, _b;
        const URL = this.MODE === 'production'
            ? (_a = process.env.MONGO_CONNECTION_URL_PROD) !== null && _a !== void 0 ? _a : null
            : (_b = process.env.MONGO_CONNECTION_URL_DEV) !== null && _b !== void 0 ? _b : null;
        return {
            MODE: this.MODE,
            URL,
        };
    },
};
exports.default = env;
