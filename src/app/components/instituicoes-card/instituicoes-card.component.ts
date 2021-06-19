import { Component, Input, OnInit } from '@angular/core';
import { InstituicoesApiModel } from 'src/app/services/instituicoes-api-model';

@Component({
  selector: 'app-instituicoes-card',
  templateUrl: './instituicoes-card.component.html',
  styleUrls: ['./instituicoes-card.component.css']
})
export class InstituicoesCardComponent implements OnInit {

  @Input()
  public instituicao: InstituicoesApiModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
