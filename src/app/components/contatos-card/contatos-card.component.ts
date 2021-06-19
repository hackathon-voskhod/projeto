import { Component, Input, OnInit } from '@angular/core';
import { ContatosAjudaModel } from '../contatos-ajuda-model';

@Component({
  selector: 'app-contatos-card',
  templateUrl: './contatos-card.component.html',
  styleUrls: ['./contatos-card.component.css']
})
export class ContatosCardComponent implements OnInit {

  constructor() {}

  @Input() public contatos : ContatosAjudaModel | undefined;

  ngOnInit(): void {
  }

}
