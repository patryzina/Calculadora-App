import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operando',
  templateUrl: './operando.component.html',
  styleUrls: ['./operando.component.css']
})
export class OperandoComponent {

  nombreOperandoA: string;
  nombreOperandoB: string;

  constructor(){
    this.nombreOperandoA = '3';
    this.nombreOperandoB = '7';
  }


}
