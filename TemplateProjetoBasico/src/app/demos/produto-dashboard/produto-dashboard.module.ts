import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoDashboardRoutingModule } from './produto-dashboard-routing.module';



@NgModule({
  declarations: [ProdutoDashboardComponent],
  imports: [
    CommonModule,
    ProdutoDashboardRoutingModule
  ], exports: [ ProdutoDashboardComponent]
})
export class ProdutoDashboardModule { }
