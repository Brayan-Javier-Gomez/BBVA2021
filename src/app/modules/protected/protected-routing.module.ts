import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceGeneralComponent } from './balance-general/balance-general.component';
import { CoeficienteCoberturaComponent } from './coeficiente-cobertura/coeficiente-cobertura.component';
import { CuentasOrdenComponent } from './cuentas-orden/cuentas-orden.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EstadoFlujosComponent } from './estado-flujos/estado-flujos.component';
import { EstadoResultadosComponent } from './estado-resultados/estado-resultados.component';
import { EstadoVariacionesComponent } from './estado-variaciones/estado-variaciones.component';
import { ExtrasComponent } from './extras/extras.component';
import { MovimientosCarteraComponent } from './movimientos-cartera/movimientos-cartera.component';
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
        path:'balance-general' , component:BalanceGeneralComponent
      },
      {
        path:'estado-resultados' , component:EstadoResultadosComponent
      },
      {
        path:'cuentas-orden' , component:CuentasOrdenComponent
      },
      {
        path:'estado-flujos' , component:EstadoFlujosComponent
      },
      {
        path:'estado-variaciones' , component:EstadoVariacionesComponent
      },
      {
        path:'movimientos-cartera' , component:MovimientosCarteraComponent
      },
      {
        path:'coeficientes-cobertura' , component:CoeficienteCoberturaComponent
      },
      {
        path:'extras' , component:ExtrasComponent
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
