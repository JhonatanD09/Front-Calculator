import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class calculator{
  constructor(){}

    createNumberList(operationType:string, dataNumbers:any){
     let numbers = []
     let dataAux  = dataNumbers.split(operationType)
      for (const i in dataAux) {
         numbers.push(Number(dataAux[i]))
      }
      return numbers
    }
}
