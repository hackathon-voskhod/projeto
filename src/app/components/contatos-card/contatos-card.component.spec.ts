import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosCardComponent } from './contatos-card.component';

describe('ContatosCardComponent', () => {
  let component: ContatosCardComponent;
  let fixture: ComponentFixture<ContatosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
