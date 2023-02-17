import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCheckOptionsComponent } from './user-check-options.component';

describe('UserCheckOptionsComponent', () => {
  let component: UserCheckOptionsComponent;
  let fixture: ComponentFixture<UserCheckOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCheckOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCheckOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
