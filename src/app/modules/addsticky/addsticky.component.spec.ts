import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstickyComponent } from './addsticky.component';

describe('AddstickyComponent', () => {
  let component: AddstickyComponent;
  let fixture: ComponentFixture<AddstickyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstickyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstickyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
