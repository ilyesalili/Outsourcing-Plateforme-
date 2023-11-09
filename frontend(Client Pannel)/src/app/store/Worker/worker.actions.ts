import {  Worker, WorkerProjectHier, WorkerStep1, WorkerStep2, WorkerStep3, WorkerStep4} from './worker.model';

export class LoadWorkers {
  static readonly type = '[Worker] Load Workers';
  constructor(public page: number, public pageSize: number) {}
}

export class SetWorkers {
  static readonly type = '[Worker] Set Workers';
  constructor(public workers: WorkerProjectHier[]) {}
}


export class RegisterWorkerStep1 {
  static readonly type = '[Worker] Register Step 1';
  constructor(public payload: WorkerStep1) {}
}

export class RegisterWorkerStep2 {
  static readonly type = '[Worker] Register Step 2';
  constructor(public payload: WorkerStep2) {}
}

export class RegisterWorkerStep3 {
  static readonly type = '[Worker] Register Step 3';
  constructor(public payload: WorkerStep3) {}
}

export class RegisterWorkerStep4 {
  static readonly type = '[Worker] Register Step 4';
  constructor(public payload: string) {}
}

export class RegisterWorkerSuccess {
  static readonly type = '[Worker] Register Worker Success';
  constructor(public payload: Worker) {}
}

export class RegisterWorkerFailure {
  static readonly type = '[Worker] Register Worker Failure';
  constructor(public payload: any) {}
}
