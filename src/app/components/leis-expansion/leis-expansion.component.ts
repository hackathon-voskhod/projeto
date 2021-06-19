import { Component, Input, OnInit } from '@angular/core';
import { LeisApi } from 'src/app/services/leis-api';

@Component({
  selector: 'app-leis-expansion',
  templateUrl: './leis-expansion.component.html',
  styleUrls: ['./leis-expansion.component.css']
})
export class LeisExpansionComponent implements OnInit {

  constructor() { }

  @Input() leis: LeisApi | undefined;

  ngOnInit(): void {
  }

}
