import { User } from "./User";

export class UserLogged{
    user: User;
    token: string;
    
    constructor(user: User, token: string){
        this.user = user;
        this.token = token;
    }
}