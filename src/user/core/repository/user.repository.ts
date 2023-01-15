import { IUserEntity } from './../entity/user.entity';
export default interface UserRepository {
    createUser(user: IUserEntity) : Promise<IUserEntity>;
}