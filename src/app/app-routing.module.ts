import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { ConvertCurrencyComponent } from './convert-currency/convert-currency.component';
import { CurrencyConvertComponent } from './currency-convert/currency-convert.component';

const routes: Routes = [
  { path: 'home', component: ConvertCurrencyComponent },
  { path: '', component: CurrencyConvertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
