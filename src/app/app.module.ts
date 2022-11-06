import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ConvertCurrencyComponent } from './convert-currency/convert-currency.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations',
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
//import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    ConvertCurrencyComponent,
    CurrencyConvertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //MDBBootstrapModule.forRoot(),
    //BrowserAnimationsModule,
    //MatTabsModule
    //MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
