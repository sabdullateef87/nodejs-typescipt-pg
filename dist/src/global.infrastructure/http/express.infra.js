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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("config"));
const mongoose_connect_1 = __importDefault(require("../datasources/mongodb/mongoose.connect"));
const logger_1 = __importDefault(require("../../utils/logger"));
const user_route_1 = __importDefault(require("../../user/controller/user.route"));
const app = (0, express_1.default)();
const PORT = config_1.default.get("PORT");
function loggerMiddleware(request, response, next) {
    logger_1.default.info(`${request.method} ${request.path}`);
    next();
}
const expressServer = () => {
    app.use(loggerMiddleware);
    app.get("/", (_req, _res) => {
        _res.send("Hello from express");
    });
    app.use(user_route_1.default);
    app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
        logger_1.default.info(`Express Application is Listening on Port ${PORT}`);
        yield (0, mongoose_connect_1.default)();
    }));
};
exports.default = expressServer;
//# sourceMappingURL=express.infra.js.map