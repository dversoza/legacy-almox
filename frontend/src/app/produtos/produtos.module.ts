import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudProdutoComponent } from './crud-produto/crud-produto.component';
import { ModalProdutoComponent } from './modal-produto/modal-produto.component';



@NgModule({
  declarations: [
    CrudProdutoComponent,
    ModalProdutoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }
