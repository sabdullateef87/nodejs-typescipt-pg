import { IUserEntity } from './../../../user/core/entity/user.entity';
import mongoose, { Schema } from "mongoose";
import logger from '../../../utils/logger';

const userSchema = new mongoose.Schema<IUserEntity>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
},{timestamps: true})

userSchema.pre("save", async function(next){
    logger.info("Saving some items into the database");
    next()
})
const User = mongoose.model<IUserEntity>('User', userSchema);