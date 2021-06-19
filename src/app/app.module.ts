import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LeisPageComponent } from './components/leis-page/leis-page.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LeisExpansionComponent } from './components/leis-expansion/leis-expansion.component';
import { InstituicoesPageComponent } from './components/instituicoes-page/instituicoes-page.component';
import { HttpClientModule } from '@angular/common/http';
import { InstituicoesCardComponent } from './components/instituicoes-card/instituicoes-card.component';
import { MatCardModule } from '@angular/material/card';
import { MenuNavegacaoComponent } from './components/menu-navegacao/menu-navegacao.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InstituicaoPageComponent } from './components/instituicao-page/instituicao-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeisPageComponent,
    LeisExpansionComponent,
    InstituicoesPageComponent,
    InstituicoesCardComponent,
    MenuNavegacaoComponent,
    InstituicaoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
