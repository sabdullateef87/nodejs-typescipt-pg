import express from "express";
import config from "config";

import mongodb_connect from "../datasources/mongodb/mongoose.connect";
import logger from "../../utils/logger";
const app = express();
const PORT = config.get<number>("PORT");

function loggerMiddleware(request: express.Request, response: express.Response, next: any) {
    console.log(`${request.method} ${request.path}`);
    next();
}

const expressServer = () => {
    app.use(loggerMiddleware);
    app.listen(PORT, async () => {
        logger.info(`Express Application is Listening on Port ${PORT}`)
        await mongodb_connect();
    })
}

export default expressServer;



