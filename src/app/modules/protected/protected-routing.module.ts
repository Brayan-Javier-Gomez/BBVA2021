import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScannerPageComponent } from './scanner-page/scanner-page.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'', 
        component: DashboardComponent
      }, 
      { path: 'files',
        component: ScannerPageComponent
      },
      {
        path:'**', redirectTo:'dashboard'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
