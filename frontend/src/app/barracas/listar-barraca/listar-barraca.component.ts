import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Barraca } from 'src/app/models/barraca.model';
import { BarracaService } from '../services/barraca.service';

@Component({
  selector: 'app-listar-barraca',
  templateUrl: './listar-barraca.component.html',
  styleUrls: ['./listar-barraca.component.css'],
})
export class ListarBarracaComponent implements OnInit {
  public barracas?: Barraca[];

  constructor(private barracaService: BarracaService) {}

  ngOnInit(): void {}

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
}
