import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../services/ajuda';
import { AjudaModel } from '../../services/ajuda-model';

@Component({
  selector: 'app-oferecer-ajuda-page',
  templateUrl: './oferecer-ajuda-page.component.html',
  styleUrls: ['./oferecer-ajuda-page.component.css'],
})
export class OferecerAjudaPageComponent implements OnInit {
  public novaAjuda: AjudaModel;

  constructor() {
    this.novaAjuda = {
      nome: '',
      tipo: '',
      descricao: '',
      email: '',
    };
  }

  ngOnInit(): void {}

  addAjuda(): void {
    // const novaAjuda: AjudaModel = {
    //   nome: 'Nova Ajuda',
    //   tipo: 'Jurídica',
    //   descricao: 'Descrição',
    //   email: 'email@gmail.com',
    // };

    myGlobals.ajuda.push(this.novaAjuda);
  }
}
