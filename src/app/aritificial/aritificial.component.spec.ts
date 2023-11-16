import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AritificialComponent } from './aritificial.component';

describe('AritificialComponent', () => {
  let component: AritificialComponent;
  let fixture: ComponentFixture<AritificialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AritificialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AritificialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
