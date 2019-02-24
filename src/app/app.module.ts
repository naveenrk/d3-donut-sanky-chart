import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { D3DonutComponent } from './d3-donut/d3-donut.component';
import { D3SankyComponent } from './d3-sanky/d3-sanky.component';

@NgModule({
  declarations: [
    AppComponent,
    D3DonutComponent,
    D3SankyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
