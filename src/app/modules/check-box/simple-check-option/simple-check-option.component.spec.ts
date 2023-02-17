import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCheckOptionComponent } from './simple-check-option.component';

describe('SimpleCheckOptionComponent', () => {
  let component: SimpleCheckOptionComponent;
  let fixture: ComponentFixture<SimpleCheckOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCheckOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCheckOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
