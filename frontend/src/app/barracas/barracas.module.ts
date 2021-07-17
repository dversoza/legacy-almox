import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarracaService } from './services/barraca.service';
import { ListarBarracaComponent } from './listar-barraca/listar-barraca.component';
import { EditarBarracaComponent } from './editar-barraca/editar-barraca.component';
import { CriarBarracaComponent } from './criar-barraca/criar-barraca.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListarBarracaComponent,
    EditarBarracaComponent,
    CriarBarracaComponent,
  ],
  imports: [CommonModule, RouterModule],
  providers: [BarracaService],
})
export class BarracasModule {}
