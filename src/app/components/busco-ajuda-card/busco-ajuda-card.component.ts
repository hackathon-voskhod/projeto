import { Component, Input, OnInit } from '@angular/core';
import { AjudaModel } from "../../services/ajuda-model";

@Component({
  selector: 'app-busco-ajuda-card',
  templateUrl: './busco-ajuda-card.component.html',
  styleUrls: ['./busco-ajuda-card.component.css']
})
export class BuscoAjudaCardComponent implements OnInit {

  @Input()
  public ajuda: AjudaModel | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
