import { State, Action, StateContext, Store } from '@ngxs/store';
import { Company } from './company.model';
import { Injectable } from '@angular/core';
import { CompanyRegistration, CompanyRegistrationFailure, CompanyRegistrationSuccess } from './company.action';
import { CompanyService } from './Company.service';
import axios from 'axios';

export interface CompanyRegistrationStateModel {
  company: Company | null;
  loading: boolean;
  error: any;
}

@State<CompanyRegistrationStateModel>({
  name: 'companyRegistration',
  defaults: {
    company: null,
    loading: false,
    error: null,
  },
})
@Injectable()
export class CompanyRegistrationState {
  constructor(
    private srvc:CompanyService,
    private store:Store
  ){}


  @Action(CompanyRegistrationSuccess)
  companyRegistrationSuccess(
    { patchState }: StateContext<CompanyRegistrationStateModel>,
    { payload }: CompanyRegistrationSuccess
  ) {
    patchState({loading: false });
  }
  @Action(CompanyRegistrationFailure)
  companyRegistrationFailure(
    { patchState }: StateContext<CompanyRegistrationStateModel>,
    { payload }: CompanyRegistrationFailure
  ) {
    patchState({ error: payload, loading: false });
  }
}
