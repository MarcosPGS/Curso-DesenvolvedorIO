import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { ProdutoCardDetalheComponent } from './componentes/produto-card-detalhe.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoCountComponent } from './componentes/produto-count.component';

@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent
    ],
    imports: [
    CommonModule,
        ProdutoRoutingModule,
    ],
    exports: [ProdutoDashboardComponent, ProdutoCardDetalheComponent, ProdutoCountComponent]
})
export class ProdutoModule { }