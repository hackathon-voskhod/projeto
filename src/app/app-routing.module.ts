import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InstituicoesPageComponent } from './components/instituicoes-page/instituicoes-page.component';
import { LeisPageComponent } from './components/leis-page/leis-page.component';
import { MenuNavegacaoComponent } from './components/menu-navegacao/menu-navegacao.component';

const routes: Routes = [
  {
    path: '',
    component: MenuNavegacaoComponent,
    children: [
      {
        path: '',
        component: HeaderComponent,
      },
      {
        path: 'instituicoes',
        component: InstituicoesPageComponent,
      },
      {
        path: 'leis',
        component: LeisPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
