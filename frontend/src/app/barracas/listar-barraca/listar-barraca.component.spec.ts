import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBarracaComponent } from './listar-barraca.component';

describe('ListarBarracaComponent', () => {
  let component: ListarBarracaComponent;
  let fixture: ComponentFixture<ListarBarracaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBarracaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBarracaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
