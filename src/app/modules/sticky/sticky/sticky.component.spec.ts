import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyComponent } from './sticky.component';

describe('StickyComponent', () => {
  let component: StickyComponent;
  let fixture: ComponentFixture<StickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickyComponent ],
      schemas: [NO_ERRORS_SCHEMA]

    })
    .compileComponents();

    fixture = TestBed.createComponent(StickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
