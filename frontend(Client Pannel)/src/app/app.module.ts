import { WorkerState } from './store/Worker/worker.state';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CategoriesComponent } from './categories/categories.component';
import { TalentComponent } from './talent/talent.component';
import { QuestionComponent } from './question/question.component';
import { ProfiltypeComponent } from './profiltype/profiltype.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ConfirmcodeemailComponent } from './confirmcodeemail/confirmcodeemail.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { LodingCvComponent } from './loding-cv/loding-cv.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { LodingCardComponent } from './loding-card/loding-card.component';
import { WorkAndDucationFormComponent } from './work-and-ducation-form/work-and-ducation-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupModelComponent } from './popup-model/popup-model.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { PopupSkillsComponent } from './popup-skills/popup-skills.component';
import { PopupEducationComponent } from './popup-education/popup-education.component';
import { PopupCertaficationComponent } from './popup-certafication/popup-certafication.component';
import { PopupPortfolioComponent } from './popup-portfolio/popup-portfolio.component';
import { InformationOfCampanyComponent } from './company/information-of-campany/information-of-campany.component';
import { PopupMediaComponent } from './company/popup-media/popup-media.component';
import { AccueilComponent } from './home/accueil/accueil.component';
import { WorkerHireComponent } from './home/worker-hire/worker-hire.component';
import { AuthState } from './store/Login/login.state';
import { MatIconModule } from '@angular/material/icon';
import { NumberToArrayDirective } from './numberToArray';
import { SkillState } from './store/Skills/skills.state';
import { WorkerState_hier } from './store/Worker/worker_hier.state';
import { CardComponent } from './company/card/card.component';
import { UserInCardComponent } from './company/user-in-card/user-in-card.component';
import { User_type_State } from './store/Login/verify-token.state';
import { UserState } from './store/SignUp/signup.state';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { OtpState } from './store/SignUp/otp.state';
import { ChatComponentComponent } from './chat/chat-component/chat-component.component';
import { ChatUsersComponent } from './chat/chat-users/chat-users.component';
import { EmploymentCartComponent } from './popup-model/employment-cart/employment-cart.component';
import { EducationCartComponent } from './popup-education/education-cart/education-cart.component';
import { CertaficatCartComponent } from './popup-certafication/certaficat-cart/certaficat-cart.component';
import { ProjetCartComponent } from './popup-portfolio/projet-cart/projet-cart.component';
import { MediaCartComponent } from './company/information-of-campany/media-cart/media-cart.component';
import { CompanyRegistrationState } from './store/Comapny/company.state';
import { SpinerComponent } from './spiner/spiner.component';
import { RequesteComponent } from './company/requeste/requeste.component';
import { CardRequestComponent } from './company/requeste/card-request/card-request.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    CategoriesComponent,
    TalentComponent,
    QuestionComponent,
    ProfiltypeComponent,
    SignupComponent,
    LoginComponent,
    ResetpasswordComponent,
    ConfirmcodeemailComponent,
    NewpasswordComponent,
    LodingCvComponent,
    PersonalInfoComponent,
    LodingCardComponent,
    WorkAndDucationFormComponent,
    PopupModelComponent,
    PopupSkillsComponent,
    PopupEducationComponent,
    PopupCertaficationComponent,
    PopupPortfolioComponent,
    InformationOfCampanyComponent,
    PopupMediaComponent,
    AccueilComponent,
    WorkerHireComponent,
    NumberToArrayDirective,
    CardComponent,
    UserInCardComponent,
    ConfirmEmailComponent,
    ChatComponentComponent,
    ChatUsersComponent,
    EmploymentCartComponent,
    EducationCartComponent,
    CertaficatCartComponent,
    ProjetCartComponent,
    MediaCartComponent,
    SpinerComponent,
    RequesteComponent,
    CardRequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxsModule.forRoot([
      WorkerState,
      AuthState,
      SkillState,
      WorkerState_hier,
      User_type_State,
      UserState,
      OtpState,
      CompanyRegistrationState
    ]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
