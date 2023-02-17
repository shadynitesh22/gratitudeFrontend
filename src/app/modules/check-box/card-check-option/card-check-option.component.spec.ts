import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCheckOptionComponent } from './card-check-option.component';

describe('CardCheckOptionComponent', () => {
  let component: CardCheckOptionComponent;
  let fixture: ComponentFixture<CardCheckOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCheckOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCheckOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
