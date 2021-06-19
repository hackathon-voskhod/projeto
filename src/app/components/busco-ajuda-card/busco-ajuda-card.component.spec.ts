import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscoAjudaCardComponent } from './busco-ajuda-card.component';

describe('BuscoAjudaCardComponent', () => {
  let component: BuscoAjudaCardComponent;
  let fixture: ComponentFixture<BuscoAjudaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscoAjudaCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscoAjudaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
