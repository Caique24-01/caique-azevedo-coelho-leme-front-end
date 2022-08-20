import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarAutoresComponent } from './atualizar-autores.component';

describe('AtualizarAutoresComponent', () => {
  let component: AtualizarAutoresComponent;
  let fixture: ComponentFixture<AtualizarAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarAutoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
