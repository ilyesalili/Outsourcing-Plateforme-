export interface User {
    email: string;
    password: string;
  }

export interface User_Role{
  email:string;
  role: string,
	userId:string
}  
export enum Role {
  Option1 = 'WORKER',
  Option2 = 'COMPANY',
}