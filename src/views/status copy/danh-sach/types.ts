
export interface IStatusTable {
    nameStatus: string,
    id: string
}
export interface IUser {
    name: string;
    email: string;
    phoneNumber: string;
    passWord: string;
    image:string;
    status: "active"| "inactive"| "lock"
}

export type ISearchParamUser = Pick<IUser,"name"|"email"|"phoneNumber">
