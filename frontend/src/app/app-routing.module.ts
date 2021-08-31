import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudBarracaComponent } from './barracas';
import { HomepageComponent } from './homepage/homepage.component';
import { CrudPessoaComponent } from './pessoas';
import { CrudUnidadeMedidaComponent } from './ums/crud-unidade-medida';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: HomepageComponent },
  {
    path: 'barracas',
    children: [{ path: '', component: CrudBarracaComponent }],
  },
  {
    path: 'pessoas',
    children: [{ path: '', component: CrudPessoaComponent }],
  },
  {
    path: 'um',
    children: [{ path: '', component: CrudUnidadeMedidaComponent }],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
