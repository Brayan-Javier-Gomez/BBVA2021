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


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    ScannerPageComponent,
    RecommendationPageComponent,
    BasePageComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class ProtectedModule { }
