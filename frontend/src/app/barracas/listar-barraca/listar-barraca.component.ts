import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Barraca } from 'src/app/shared/models/barraca.model';
import { BarracaService } from '../services/barraca.service';

@Component({
  selector: 'app-listar-barraca',
  templateUrl: './listar-barraca.component.html',
  styleUrls: ['./listar-barraca.component.css'],
})
export class ListarBarracaComponent implements OnInit {
  public barracas!: Barraca[];

  constructor(private barracaService: BarracaService) {}

  ngOnInit(): void {
    this.getBarracas();
  }

  public getBarracas(): void {
    this.barracaService.getBarracas().subscribe(
      (response: Barraca[]) => {
        this.barracas = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchBarraca(key: string): void {
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
    if (results.length === 0 || !key) {
      this.getBarracas();
    }
  }

  public excluir($event: any, barraca: Barraca) {
    $event.preventDefault();
    if (
      confirm(`Tem certeza que deseja excluir a barraca ${barraca.nome}?`) &&
      barraca.idBarraca
    ) {
      this.barracaService.deleteBarraca(barraca.idBarraca).subscribe(
        (response: void) => {
          this.getBarracas();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
  }
}
