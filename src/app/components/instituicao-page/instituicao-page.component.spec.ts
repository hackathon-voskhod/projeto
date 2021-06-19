import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituicaoPageComponent } from './instituicao-page.component';

describe('InstituicaoPageComponent', () => {
  let component: InstituicaoPageComponent;
  let fixture: ComponentFixture<InstituicaoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituicaoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituicaoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
