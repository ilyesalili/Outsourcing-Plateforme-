import { Role } from "../Login/login.model";
import { USER_STATUS } from "./user-status";

export interface DecodedJwt{
    email:string;
    status:USER_STATUS,
    role:Role
}