import { Component, OnInit } from '@angular/core';
import * as myGlobals from '../../services/ajuda';
import { AjudaModel } from "../../services/ajuda-model";

@Component({
  selector: 'app-busco-ajuda-page',
  templateUrl: './busco-ajuda-page.component.html',
  styleUrls: ['./busco-ajuda-page.component.css']
})
export class BuscoAjudaPageComponent implements OnInit {

  listaDeAjuda: AjudaModel[] = []
  constructor() {}

  ngOnInit(): void {
    this.listaDeAjuda = myGlobals.ajuda;
    console.log(this.listaDeAjuda)
  }

}
