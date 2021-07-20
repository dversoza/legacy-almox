import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as barracas from './barracas/';

const routes: Routes = [
  { path: '', redirectTo: 'barracas', pathMatch: 'full' },
  {
    path: 'barracas',
    children: [
      { path: '', component: barracas.ListarBarracaComponent },
      { path: 'nova', component: barracas.ListarBarracaComponent },
      { path: 'editar/:id', component: barracas.ListarBarracaComponent },
      { path: 'excluir/:id', component: barracas.ListarBarracaComponent },
    ],
  },
  { path: '**', redirectTo: 'barracas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
