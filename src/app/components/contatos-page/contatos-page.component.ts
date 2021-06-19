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

    contato.nome = "Polícia Militar";
    contato.contato = "190";

    this.contatosAjuda.push(contato);

    const contato2 = new ContatosAjudaModel();

    contato2.nome = "Central de Atendimento à Mulher";
    contato2.contato = "180";

    this.contatosAjuda.push(contato2);

    const contato3 = new ContatosAjudaModel();

    contato3.nome = "Disque Denúncia";
    contato3.contato = "197";

    this.contatosAjuda.push(contato3);

    const contato4 = new ContatosAjudaModel();

    contato4.nome = "Disque Direitos Humanos";
    contato4.contato = "100";

    this.contatosAjuda.push(contato4);
  }

  ngOnInit(): void {
  }

}
