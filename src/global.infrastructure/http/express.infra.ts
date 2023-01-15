import express, { NextFunction, Express, Request, Response, } from "express";
import config from "config";

import mongodb_connect from "../datasources/mongodb/mongoose.connect";
import logger from "../../utils/logger";
import userRoutes from "../../user/controller/user.route";

const app = express();
const PORT = config.get<number>("PORT");

function loggerMiddleware(request: express.Request, response: express.Response, next: NextFunction) {
    logger.info(`${request.method} ${request.path}`);
    next();
}


const expressServer = () => {
    app.use(loggerMiddleware);


    app.use(userRoutes)
    
    app.listen(PORT, async () => {
        logger.info(`Express Application is Listening on Port ${PORT}`)
        await mongodb_connect();
    })
}

export default expressServer;