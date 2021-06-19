import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatosPageComponent } from './components/contatos-page/contatos-page.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InstituicaoPageComponent } from './components/instituicao-page/instituicao-page.component';
import { InstituicoesPageComponent } from './components/instituicoes-page/instituicoes-page.component';
import { LeisPageComponent } from './components/leis-page/leis-page.component';
import { MenuNavegacaoComponent } from './components/menu-navegacao/menu-navegacao.component';
import { BuscoAjudaPageComponent } from './components/busco-ajuda-page/busco-ajuda-page.component';
import { OferecerAjudaPageComponent } from './components/oferecer-ajuda-page/oferecer-ajuda-page.component';

const routes: Routes = [
  {
    path: '',
    component: MenuNavegacaoComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'instituicoes',
        component: InstituicoesPageComponent,
      },
      { path: 'instituicoes/:id', component: InstituicaoPageComponent },
      {
        path: 'leis',
        component: LeisPageComponent,
      },
      {
        path: 'contatos',
        component: ContatosPageComponent,
      },
      {
        path: 'busco_ajuda',
        component: BuscoAjudaPageComponent,
      },
      {
        path: 'oferecer_ajuda',
        component: OferecerAjudaPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
