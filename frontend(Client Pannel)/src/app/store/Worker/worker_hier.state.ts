import { State, Action, StateContext, Selector } from '@ngxs/store';
import { PaginatedWorkerResponse, WorkerProjectHier } from './worker.model';
import { WorkerService } from './worker.service';
import { LoadWorkers, SetWorkers } from './worker.actions';
import { Injectable } from '@angular/core';

export interface WorkerStateModel {
  workers: WorkerProjectHier[];
}

@State<WorkerStateModel>({
  name: 'workers',
  defaults: {
    workers: [],
  },
})
@Injectable()
export class WorkerState_hier {
  constructor(private workerService: WorkerService) {}

  @Selector()
  static getWorkers(state: WorkerStateModel) {
    return state.workers;
  }

  @Action(LoadWorkers)
  loadWorkers(
    ctx: StateContext<PaginatedWorkerResponse[]>,
    action: LoadWorkers
  ) {
    return this.workerService
      .getAllWorkers(action.page, action.pageSize)
      .subscribe((response: PaginatedWorkerResponse) => {
        ctx.dispatch(new SetWorkers(response.workers));
      });
  }

  @Action(SetWorkers)
  setWorkers(ctx: StateContext<WorkerStateModel>, action: SetWorkers) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      workers: action.workers,
    });
  }
}
