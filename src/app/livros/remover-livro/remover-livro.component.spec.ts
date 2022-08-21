import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverLivroComponent } from './remover-livro.component';

describe('RemoverLivroComponent', () => {
  let component: RemoverLivroComponent;
  let fixture: ComponentFixture<RemoverLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverLivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
