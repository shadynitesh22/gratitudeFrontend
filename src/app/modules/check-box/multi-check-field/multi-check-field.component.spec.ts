import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCheckFieldComponent } from './multi-check-field.component';

describe('MultiCheckFieldComponent', () => {
  let component: MultiCheckFieldComponent;
  let fixture: ComponentFixture<MultiCheckFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiCheckFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiCheckFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
