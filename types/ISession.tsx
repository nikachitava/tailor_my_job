export interface IUser {
    email: string;
    image: string;
    name: string;
}

export interface ISession {
    exspires: string;
    user: IUser;
}
