import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/protected/dashboard/dashboard.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { RegisterComponent } from './modules/pages/register/register.component';

const routes: Routes = [
  { path: 'auth', loadChildren:() =>import ('./modules/pages/pages.module').then(m => m.PagesModule)},
  { path: 'dashboard', loadChildren:() =>import ('./modules/protected/protected.module').then(m => m.ProtectedModule)},
  { path: '**', redirectTo: 'auth'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
