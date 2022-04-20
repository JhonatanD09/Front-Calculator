import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn:'root'
})

export class CalculatorService{
  url ='http://localhost:8090/'
  constructor(private http :HttpClient ){}

  getCalculatorData(direction:string,numbers:any){
    return this.http.get(this.url+direction+'?numbers='+numbers)
  }
}
