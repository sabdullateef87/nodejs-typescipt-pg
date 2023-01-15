export interface IUserEntity{
    email: string;
    password: string;
    name: string;
}

export class UserEntity {
    email: string;
    password: string;
    name: string;
    constructor(email: string, name: string, password: string){
        this.email = email;
        this.password = password;
        this.name = name;
    }
}