import { IUserEntity } from '../entity/user.entity';
import userRepository from "../repository/user.repository"
export default class UserService {
    userRepo: userRepository
    constructor(userRepo: userRepository){
        this.userRepo = userRepo;
    }

    async createUser(user: IUserEntity){
        
    }
}