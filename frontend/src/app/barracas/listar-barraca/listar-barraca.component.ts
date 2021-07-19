import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PessoaService } from 'src/app/pessoas/services/pessoa.service';
import { Barraca } from 'src/app/shared/models/barraca.model';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { BarracaService } from '../services/barraca.service';

@Component({
  selector: 'app-listar-barraca',
  templateUrl: './listar-barraca.component.html',
  styleUrls: ['./listar-barraca.component.css'],
})
export class ListarBarracaComponent implements OnInit {
  public barracas!: Barraca[];
  public responsaveis!: Pessoa[];
  public editBarraca!: Barraca;

  constructor(
    private barracaService: BarracaService,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.listarBarracas();
    this.listarResponsaveis();
  }

  public listarBarracas(): void {
    this.barracaService.getBarracas().subscribe(
      (response: Barraca[]) => {
        this.barracas = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public listarResponsaveis(): void {
    this.pessoaService.getPessoas().subscribe(
      (response: Pessoa[]) => {
        this.responsaveis = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public criarBarraca(form: NgForm): void {
    document.getElementById('criar-barraca-form-exit')?.click();
    this.barracaService.addBarraca(form.value).subscribe(
      (response: Barraca) => {
        this.listarBarracas();
        form.reset();
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
        this.listarBarracas();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public pesquisarBarraca(key: string): void {
    const results: Barraca[] = [];
    for (const barraca of this.barracas) {
      if (
        barraca?.nome?.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        barraca?.contato?.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        barraca?.responsavel?.nome?.toLowerCase().indexOf(key.toLowerCase()) !==
          -1
      ) {
        results.push(barraca);
      }
    }
    this.barracas = results;
  }

  public excluirBarraca($event: any, barraca: Barraca) {
    $event.preventDefault();
    if (
      confirm(`Tem certeza que deseja excluir a barraca ${barraca.nome}?`) &&
      barraca.idBarraca
    ) {
      this.barracaService.deleteBarraca(barraca.idBarraca).subscribe(
        (response: void) => {
          this.listarBarracas();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }
}
