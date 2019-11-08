import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Componenet1Component } from './componenet1/componenet1.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    Componenet1Component,
    ProductcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
