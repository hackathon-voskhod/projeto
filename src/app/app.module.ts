import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LeisPageComponent } from './components/leis-page/leis-page.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { LeisExpansionComponent } from './components/leis-expansion/leis-expansion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeisPageComponent,
    LeisExpansionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
