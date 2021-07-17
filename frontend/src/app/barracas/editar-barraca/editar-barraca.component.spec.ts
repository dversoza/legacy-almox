import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBarracaComponent } from './editar-barraca.component';

describe('EditarBarracaComponent', () => {
  let component: EditarBarracaComponent;
  let fixture: ComponentFixture<EditarBarracaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBarracaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBarracaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
