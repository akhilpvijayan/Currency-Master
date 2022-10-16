import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMyCurrencyService {

  constructor(private http:HttpClient) { }

getCurrency(country1:string){
  let url = ' https://open.er-api.com/v6/latest/'+ country1
  return this.http.get(url);
}
}
