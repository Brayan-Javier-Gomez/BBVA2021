import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScannerPageComponent } from './scanner-page/scanner-page.component';
import { FormsModule } from '@angular/forms';
import { RecommendationPageComponent } from './recommendation-page/recommendation-page.component';
import { BasePageComponent } from './base-page/base-page.component';
import { BalanceGeneralComponent } from './balance-general/balance-general.component';
import { EstadoResultadosComponent } from './estado-resultados/estado-resultados.component';
import { CuentasOrdenComponent } from './cuentas-orden/cuentas-orden.component';
import { EstadoFlujosComponent } from './estado-flujos/estado-flujos.component';
import { EstadoVariacionesComponent } from './estado-variaciones/estado-variaciones.component';
import { MovimientosCarteraComponent } from './movimientos-cartera/movimientos-cartera.component';
import { CoeficienteCoberturaComponent } from './coeficiente-cobertura/coeficiente-cobertura.component';
import { ExtrasComponent } from './extras/extras.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ScannerPageComponent,
    RecommendationPageComponent,
    BasePageComponent,
    BalanceGeneralComponent,
    EstadoResultadosComponent,
    CuentasOrdenComponent,
    EstadoFlujosComponent,
    EstadoVariacionesComponent,
    MovimientosCarteraComponent,
    CoeficienteCoberturaComponent,
    ExtrasComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class ProtectedModule { }
