import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LeisPageComponent } from './components/leis-page/leis-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { LeisExpansionComponent } from './components/leis-expansion/leis-expansion.component';
import { InstituicoesPageComponent } from './components/instituicoes-page/instituicoes-page.component';
import { HttpClientModule } from '@angular/common/http';
import { InstituicoesCardComponent } from './components/instituicoes-card/instituicoes-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeisPageComponent,
    LeisExpansionComponent,
    InstituicoesPageComponent,
    InstituicoesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
