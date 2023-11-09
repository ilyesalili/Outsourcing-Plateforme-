import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfiltypeComponent } from './profiltype/profiltype.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ConfirmcodeemailComponent } from './confirmcodeemail/confirmcodeemail.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { LodingCvComponent } from './loding-cv/loding-cv.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LodingCardComponent } from './loding-card/loding-card.component';
import { WorkAndDucationFormComponent } from './work-and-ducation-form/work-and-ducation-form.component';
import { InformationOfCampanyComponent } from './company/information-of-campany/information-of-campany.component';
import { AccueilComponent } from './home/accueil/accueil.component';
import { CardComponent } from './company/card/card.component';
import { WorkerguardGuard } from './Guard/authguard.guard';
import { CompanyGuard } from './Guard/company.guard';
import { BackToLogInGuard } from './Guard/back-to-log-in.guard';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { RequesteComponent } from './company/requeste/requeste.component';

const routes: Routes = [
  { path: '', redirectTo: '/landingpage', pathMatch: 'full' },
  { path: 'landingpage', component: LandingpageComponent },
  { path: 'join', children: [{ path: '', component: ProfiltypeComponent }] },
  {
    path: 'signup/:role',
    children: [
      { path: '', component: SignupComponent }, 
    ],
  },
  {path:'signup',component:SignupComponent},
  { path: 'confirmemail', component: ConfirmEmailComponent },
  {
    path: 'login',
    children: [
      { path: '', component: LoginComponent, pathMatch: 'full' },
      {
        path: 'resetpassword',
        children: [
          { path: '', component: ResetpasswordComponent },
          {
            path: 'comfirmcode',
            children: [
              { path: '', component: ConfirmcodeemailComponent },
              { path: 'newpassword', component: NewpasswordComponent },
            ],
          },
        ],
      },
    ],
  },
  {
    path: 'worker',
    // canActivate: [WorkerguardGuard, BackToLogInGuard],
    children: [
      { path: '', component: PersonalInfoComponent },
      {path:'national_cart',component:LodingCardComponent},
      {
        path: 'upload_cv',
        children: [{ path: '', component: LodingCvComponent }],
      },
      {
        path: 'work_and_education',
        children: [{ path: '', component: WorkAndDucationFormComponent }],
      },
    ],
  },
  {
    path: 'company',
    children: [
      { path: '', component: InformationOfCampanyComponent },
      { path: 'panier', component: CardComponent },
      {path:'request',component:RequesteComponent}
    ],
  },
  {
    path:'home',
    component: AccueilComponent,
    // canActivate: [CompanyGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
