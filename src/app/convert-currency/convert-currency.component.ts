import { Component, OnInit } from '@angular/core';
import { GetMyCurrencyService } from '../get-my-currency.service';

@Component({
  selector: 'app-convert-currency',
  templateUrl: './convert-currency.component.html',
  styleUrls: ['./convert-currency.component.css']
})
export class ConvertCurrencyComponent implements OnInit {

  constructor(private currency: GetMyCurrencyService){

  }

  ngOnInit(): void {
  }

  currJson: any = [];

  base = 'USD';
  country2 = 'USD';
  result: string = '1';

  changeBase(a:string){
    this.base = a;
    //console.log(this.base);
  }

  changeCountry2(b:string){
    this.country2 = b;
    //console.log(this.country2);
  }

  convert(){
    
    this.currency.getCurrency(this.base).subscribe(data =>{
      this.currJson = JSON.stringify(data);
      this.currJson = JSON.parse(this.currJson);
      console.log(this.country2);
      if(this.country2 == "INR"){
        this.result = this.currJson.rates.INR;
      }
      if(this.country2 == "USD"){
        this.result = this.currJson.rates.USD;
      }
      if(this.country2 == "EUR"){
        this.result = this.currJson.rates.EUR;
      }
    })
    
  }

}