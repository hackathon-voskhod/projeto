import { Component, OnInit } from '@angular/core';
import { LeisApi } from 'src/app/services/leis-api';
import { LeisApiService } from 'src/app/services/leis-api.service';

@Component({
  selector: 'app-leis-page',
  templateUrl: './leis-page.component.html',
  styleUrls: ['./leis-page.component.css']
})
export class LeisPageComponent implements OnInit {

  listaLeis: LeisApi[] = [];

  constructor(public leisApi: LeisApiService) { }

  ngOnInit(): void {
    this.leisApi.get().subscribe({
      next: (retornoDaApi) => {
        this.listaLeis = retornoDaApi;
      }
    });
​
  }
}
