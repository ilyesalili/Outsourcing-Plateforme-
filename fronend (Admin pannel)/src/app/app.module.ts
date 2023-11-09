import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Componants/nav-bar/nav-bar.component';
import { DashboardComponent } from './Componants/Admin/dashboard/dashboard.component';
import { AdminsComponent } from './Componants/Admin/admins/admins.component';
import { WorkersComponent } from './Componants/Admin/workers/workers.component';
import { AccueilComponent } from './Componants/accueil/accueil.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from '@angular/material/icon';
import { InfoCardComponent } from './Componants/info-card/info-card.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { JobrequestComponent } from './Componants/jobrequest/jobrequest.component';
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    AdminsComponent,
    WorkersComponent,
    AccueilComponent,
    InfoCardComponent,
    LoginComponent,
    // JobrequestComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'Eng',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule, ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry) {
    // Register the icons
    this.matIconRegistry.registerFontClassAlias('material-icons', 'mdi');
  }
}