import { Component, Injectable } from '@angular/core';
import {calculator} from './calculator'
import { CalculatorService } from './calculator.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'parcial-calculadora';

  constructor(public c: calculator, public calculate :CalculatorService){}

  dataNumbers=''
  operator = '+'

  pressNumber(event:Event){
    const btn = event.target as HTMLButtonElement
    this.dataNumbers+= btn.id
  }

  clearLabel(){
    this.dataNumbers = ''
  }

  getResult(){
    switch(this.operator){
      case '+':
        this.sum()
        break;
      case '-':
        this.substraction()
        break;
      case '*':
        this.multiply()
        break;
      case '/':
        this.division()
        break;
    }
  }

  sum(){
    let listNumbers =this.c.createNumberList('+',this.dataNumbers)
    this.calculate.getCalculatorData('suma',listNumbers).subscribe((res:any)=>{
      this.dataNumbers = res.result
    })
  }

  substraction(){
    let listNumbers = this.c.createNumberList('-',this.dataNumbers)
    this.calculate.getCalculatorData('resta',listNumbers).subscribe((res:any)=>{
      this.dataNumbers = res.result
    })
  }

  multiply(){
    let listNumbers =this.c.createNumberList('*',this.dataNumbers)
    this.calculate.getCalculatorData('multiplicacion',listNumbers).subscribe((res:any)=>{
      this.dataNumbers = res.result
    })
  }

  division(){
    let listNumbers =this.c.createNumberList('/',this.dataNumbers)
    this.calculate.getCalculatorData('division',listNumbers).subscribe((res:any)=>{
      this.dataNumbers = res.result
    })
  }

  capture(event:Event){
    let operator1 = event.target as HTMLOptionElement
    this.operator = operator1.value
  }

}
