import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PessoaService } from 'src/app/pessoas/services/pessoa.service';
import { Barraca } from 'src/app/shared/models/barraca.model';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { BarracaService } from '../services/barraca.service';

@Component({
  selector: 'app-editar-barraca',
  templateUrl: './editar-barraca.component.html',
  styleUrls: ['./editar-barraca.component.css'],
})
export class EditarBarracaComponent implements OnInit {
  public responsaveis!: Pessoa[];

  @Input() public barraca!: Barraca;
  @Output() private retorno = new EventEmitter<string>();

  constructor(
    private barracaService: BarracaService,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.pessoaService.getPessoas().subscribe(
      (response: Pessoa[]) => {
        this.responsaveis = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public atualizarBarraca(barraca: Barraca): void {
    document.getElementById('editar-barraca-form-exit')?.click();
    this.barracaService.updateBarraca(barraca).subscribe(
      (response: Barraca) => {
        this.retorno.emit('Barraca atualizada com sucesso!');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
