import { State, Action, StateContext, Selector } from '@ngxs/store';
import { WorkerStep1, WorkerStep2, WorkerStep3, WorkerStep4 } from './worker.model';
import { WorkerService } from './worker.service';
import {
  RegisterWorkerStep1,
  RegisterWorkerStep2,
  RegisterWorkerStep3,
  RegisterWorkerStep4,
  RegisterWorkerSuccess,
  RegisterWorkerFailure,
} from './worker.actions';
import { Injectable } from '@angular/core';

export interface WorkerStateModel {
  workerStep1: WorkerStep1 | null;
  workerStep2: WorkerStep2 | null;
  workerStep3: WorkerStep3 | null;
  workerStep4: string| null;
  loading: boolean;
  error: any;
}

@State<WorkerStateModel>({
  name: 'worker',
  defaults: {
    workerStep1: null,
    workerStep2: null,
    workerStep3: null,
    workerStep4: null,
    loading: false,
    error: null,
  },
})
@Injectable()
export class WorkerState {
  constructor(private workerService: WorkerService) {}
  @Selector()
  static getworkerStep1(state: WorkerStateModel): WorkerStep1 | null {
    return state.workerStep1;
  }
  @Selector()
  static getworkerStep2(state: WorkerStateModel): WorkerStep2 | null {
    return state.workerStep2;
  }
  @Selector()
  static getworkerStep3(state: WorkerStateModel): WorkerStep3 | null {
    return state.workerStep3;
  }
  @Selector()
  static getworkerStep4(state: WorkerStateModel):string | null {
    return state.workerStep4;
  }

  @Action(RegisterWorkerStep1)
  registerWorkerStep1(
    { patchState }: StateContext<WorkerStateModel>,
    { payload }: RegisterWorkerStep1
  ) {
    patchState({ workerStep1: payload });
  }

  @Action(RegisterWorkerStep2)
  registerWorkerStep2(
    { patchState }: StateContext<WorkerStateModel>,
    { payload }: RegisterWorkerStep2
  ) {
    patchState({ workerStep2: payload });
  }

  @Action(RegisterWorkerStep3)
  registerWorkerStep3(
    { patchState }: StateContext<WorkerStateModel>,
    { payload }: RegisterWorkerStep3
  ) {
    patchState({ workerStep3: payload });
  }
  @Action(RegisterWorkerStep4)
  registerWorkerStep4(
    { patchState }: StateContext<WorkerStateModel>,
    { payload }: RegisterWorkerStep4
  ) {
    patchState({ workerStep4: payload});
  }

  @Action(RegisterWorkerSuccess)
  registerWorkerSuccess(
    { patchState }: StateContext<WorkerStateModel>,
    { payload }: RegisterWorkerSuccess
  ) {
    patchState({ loading: false });
    // this.workerService.PostWorker(payload)
   
  }

  @Action(RegisterWorkerFailure)
  registerWorkerFailure(
    { patchState }: StateContext<WorkerStateModel>,
    { payload }: RegisterWorkerFailure
  ) {
    patchState({ error: payload, loading: false });
    // Handle error if needed
  }
}