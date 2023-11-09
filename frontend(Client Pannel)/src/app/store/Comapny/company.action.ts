import { Company } from "./company.model";

export class CompanyRegistration {
  static readonly type = '[Company Registration] Register';
  constructor(public payload: Company) {}
}

export class CompanyRegistrationSuccess {
  static readonly type = '[Company Registration] Register Success';
  constructor(public payload: Company) {}
}

export class CompanyRegistrationFailure {
  static readonly type = '[Company Registration] Register Failure';
  constructor(public payload: any) {}
}
