import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  @ViewChild('formBarraca') formBarraca!: NgForm;
  public barraca?: Barraca;
  public responsaveis?: Pessoa[];

  constructor(
    private barracaService: BarracaService,
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id: number = +this.route.snapshot.params['id'];
    this.barracaService.getBarracaById(id).subscribe(
      (response: Barraca) => {
        this.barraca = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

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

  public atualizar(barraca: Barraca) {
    if (this.formBarraca.form.valid) {
      this.barracaService.updateBarraca(barraca).subscribe(
        (response: Barraca) => {
          this.router.navigate(['barracas']);
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }
}
