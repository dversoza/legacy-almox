import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Barraca } from 'src/app/models/barraca.model';
import { BarracaService } from '../services/barraca.service';

@Component({
  selector: 'app-editar-barraca',
  templateUrl: './editar-barraca.component.html',
  styleUrls: ['./editar-barraca.component.css'],
})
export class EditarBarracaComponent implements OnInit {
  @ViewChild('formBarraca') formBarraca!: NgForm;
  public barraca?: Barraca;

  constructor(
    private barracaService: BarracaService,
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

  ngOnInit(): void {}

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
