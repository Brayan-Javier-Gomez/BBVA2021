import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceGeneralComponent } from './balance-general/balance-general.component';
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
      },
      {
        path:'balance-general' , component:BalanceGeneralComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
