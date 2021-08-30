import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarracaService } from './services/barraca.service';
import { CrudBarracaComponent } from './crud-barraca';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CrudBarracaComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule],
  providers: [BarracaService],
})
export class BarracasModule {}
