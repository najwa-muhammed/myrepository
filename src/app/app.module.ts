import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Componenet1Component } from './componenet1/componenet1.component';
import { ProductcomponentComponent } from './productcomponent/productcomponent.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http'
const appRoutes: Routes = [
  {
    path: '',
    component: ProductcomponentComponent

  },
  {
    path: 'addproduct',
    component: AddproductComponent
  },
  {
    path: 'addproduct/:id',
    component: AddproductComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    Componenet1Component,
    ProductcomponentComponent,
    AddproductComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
    appRoutes,


    ),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
