import mongoose from "mongoose";
import config from "config";
import log from '../../../utils/logger';

const mongodb_connect = async () => {
    const db_uri = config.get<string>("DB_URI");
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(db_uri);
        log.info(`Database connection successful`);
    } catch (error) {
        log.error(`Failed to connect to mongodb database! -  ${error}`);
        process.exit(1);
    }
}

export default mongodb_connect;