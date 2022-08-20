import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageErroApiComponent } from './message-erro-api.component';

describe('MessageErroApiComponent', () => {
  let component: MessageErroApiComponent;
  let fixture: ComponentFixture<MessageErroApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageErroApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageErroApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
