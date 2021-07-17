import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Barraca } from 'src/app/shared/models/barraca.model';
import { BarracaService } from '../services/barraca.service';

@Component({
  selector: 'app-criar-barraca',
  templateUrl: './criar-barraca.component.html',
  styleUrls: ['./criar-barraca.component.css'],
})
export class CriarBarracaComponent implements OnInit {
  @ViewChild('formBarraca') formBarraca!: NgForm;
  public barraca: Barraca;

  constructor(private barracaService: BarracaService, private router: Router) {
    this.barraca = new Barraca();
  }

  ngOnInit(): void {}

  public criar(): void {
    if (this.formBarraca.form.valid) {
      this.barracaService.addBarraca(this.barraca).subscribe(
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
