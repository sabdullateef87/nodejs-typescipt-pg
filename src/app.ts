import express from "express";
import config from "config";
import log from "./utils/logger";
import mongodb_connect from "./global.infrastructure/datasources/mongodb/mongoose.connect";

const app = express();
const PORT = config.get<number>("PORT");

app.listen(PORT, async () => {
    log.info(`Application is listening on port ${PORT}`)
    await mongodb_connect();
})