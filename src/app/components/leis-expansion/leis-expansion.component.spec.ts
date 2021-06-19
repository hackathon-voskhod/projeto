import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeisExpansionComponent } from './leis-expansion.component';

describe('LeisExpansionComponent', () => {
  let component: LeisExpansionComponent;
  let fixture: ComponentFixture<LeisExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeisExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeisExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
