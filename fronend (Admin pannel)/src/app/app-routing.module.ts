import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Componants/accueil/accueil.component';
import { DashboardComponent } from './Componants/Admin/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'',redirectTo:'/admin',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  { path: 'admin', component:AccueilComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
