import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosPageComponent } from './contatos-page.component';

describe('ContatosPageComponent', () => {
  let component: ContatosPageComponent;
  let fixture: ComponentFixture<ContatosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
