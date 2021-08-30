import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudBarracaComponent } from './barracas';
import { CrudPessoaComponent } from './pessoas';

const routes: Routes = [
  { path: '', redirectTo: 'pessoas', pathMatch: 'full' },
  {
    path: 'barracas',
    children: [{ path: '', component: CrudBarracaComponent }],
  },
  {
    path: 'pessoas',
    children: [{ path: '', component: CrudPessoaComponent }],
  },

  { path: '**', redirectTo: 'barracas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
