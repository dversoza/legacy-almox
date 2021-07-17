import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarBarracaComponent } from './criar-barraca.component';

describe('CriarBarracaComponent', () => {
  let component: CriarBarracaComponent;
  let fixture: ComponentFixture<CriarBarracaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarBarracaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarBarracaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
