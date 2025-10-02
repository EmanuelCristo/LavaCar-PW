import { Component } from '@angular/core';

@Component({standalone: true,
  selector: 'app-tabuada',
  imports: [],
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']})
export class TabuadaComponent {
  valor: number = 5;


  calculaTabuada(valor: number){
    for(let i=1; i<10; i++){
       valor*i
      console.log("", valor*i);
    }
  }

  constructor(){
    this.calculaTabuada(this.valor);
  }

}
