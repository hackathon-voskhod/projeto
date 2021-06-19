import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OferecerAjudaPageComponent } from './oferecer-ajuda-page.component';

describe('OferecerAjudaPageComponent', () => {
  let component: OferecerAjudaPageComponent;
  let fixture: ComponentFixture<OferecerAjudaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OferecerAjudaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OferecerAjudaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
