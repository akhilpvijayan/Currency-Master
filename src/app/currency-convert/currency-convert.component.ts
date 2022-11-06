import { Component, OnInit } from '@angular/core';
import { GetMyCurrencyService } from '../get-my-currency.service';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.css']
})
export class CurrencyConvertComponent implements OnInit {

  constructor(private currency: GetMyCurrencyService){

  }

  ngOnInit(): void {
  }

  currJson: any = [];

  amount = '1';
  base = 'USD';
  country2 = 'INR';
  result: string = '1';

  changeAmount(c:string){
    this.amount = c;
    console.log(this.amount);
    this.convert();
  }

  changeBase(a:string){
    this.base = a;
    console.log(this.base);
    this.convert();
  }

  changeCountry2(b:string){
    this.country2 = b;
    console.log(this.country2);
    this.convert();
  }

  convert(){
    
    this.currency.getCurrency(this.base).subscribe(data =>{
      this.currJson = JSON.stringify(data);
      this.currJson = JSON.parse(this.currJson);
      console.log(this.country2);
      if(this.country2 == "INR"){
        this.result = this.currJson.rates.INR;
        this.addAmount();
      }
      if(this.country2 == "USD"){
        this.result = this.currJson.rates.USD;
        this.addAmount();
      }
      if(this.country2 == "EUR"){
        this.result = this.currJson.rates.EUR;
        this.addAmount();
      }
      if(this.country2 == "CAD"){
        this.result = this.currJson.rates.CAD;
        this.addAmount();
      }
    })
  }

addAmount(){
  this.result = String(parseFloat(this.amount)*parseFloat(this.result));
}
}