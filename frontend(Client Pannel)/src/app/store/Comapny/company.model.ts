import { Worker } from './../../../../../Admin/src/app/Store/workers/worker.model';
import { Role } from "../Login/login.model";
import { WorkerJobRequest } from '../Worker/worker.model';

export interface Company {
    name:string;
    field:string;
    website:string
    type:Role.Option2
    size:number
    socialMediaLinks:Media[]
  }
export interface Media{
    name:string;
    url:string
}

export interface jobrequest{
  companyId:string;
  status:string;
  workers:workeronJob[]
}
export interface workeronJob{
  workerId:string;
  nbHours: number;
  publicPrice:number
}