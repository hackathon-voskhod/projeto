import { Component, OnInit } from '@angular/core';
import { ContatosAjudaModel } from '../contatos-ajuda-model';

@Component({
  selector: 'app-contatos-page',
  templateUrl: './contatos-page.component.html',
  styleUrls: ['./contatos-page.component.css']
})
export class ContatosPageComponent implements OnInit {

  public contatosAjuda: Array<ContatosAjudaModel>;

  constructor() {
    this.contatosAjuda = [];

    const contato = new ContatosAjudaModel();

    contato.nome = "Policia";
    contato.contato = "180";

    this.contatosAjuda.push(contato);

    const contato2 = new ContatosAjudaModel();

    contato2.nome = "Policia";
    contato2.contato = "180";

    this.contatosAjuda.push(contato2);

    const contato3 = new ContatosAjudaModel();

    contato3.nome = "Policia";
    contato3.contato = "180";

    this.contatosAjuda.push(contato3);
  }

  ngOnInit(): void {
  }

}
