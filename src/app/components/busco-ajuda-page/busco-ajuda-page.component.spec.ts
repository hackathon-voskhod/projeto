import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscoAjudaPageComponent } from './busco-ajuda-page.component';

describe('BuscoAjudaPageComponent', () => {
  let component: BuscoAjudaPageComponent;
  let fixture: ComponentFixture<BuscoAjudaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscoAjudaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscoAjudaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
