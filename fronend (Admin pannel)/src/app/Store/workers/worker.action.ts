import { Worker } from './worker.model';

export class RegisterWorker {
  static readonly type = '[Worker] Register Worker';
  constructor(public payload: Worker) {}
}

export class RegisterWorkerSuccess {
  static readonly type = '[Worker] Register Worker Success';
  constructor(public payload: Worker) {}
}

export class RegisterWorkerFailure {
  static readonly type = '[Worker] Register Worker Failure';
  constructor(public payload: any) {}
}
