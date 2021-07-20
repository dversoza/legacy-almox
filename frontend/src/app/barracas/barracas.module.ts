import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarracaService } from './services/barraca.service';
import { ListarBarracaComponent } from './listar-barraca/listar-barraca.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarBarracaComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  providers: [BarracaService],
})
export class BarracasModule {}
