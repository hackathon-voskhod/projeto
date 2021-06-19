import { Component, OnInit } from '@angular/core';
import { InstituicoesApiModel } from 'src/app/services/instituicoes-api-model';
import { InstituicoesApiService } from 'src/app/services/instituicoes-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instituicao-page',
  templateUrl: './instituicao-page.component.html',
  styleUrls: ['./instituicao-page.component.css']
})
export class InstituicaoPageComponent implements OnInit {

  instituicao: InstituicoesApiModel | undefined;

  constructor(
    public instituicoesApi: InstituicoesApiService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.instituicoesApi.get().subscribe({
      next: (retornoDaApi) => {
        const selecionado = retornoDaApi.filter(e=> e.id.toString() == this.route.snapshot.paramMap.get('id'));
        this.instituicao = selecionado[0];
        console.log(this.instituicao)
      }
    });
  }

}
