import { Component } from '@angular/core';

@Component({standalone: true,
  selector: 'app-primo',
  imports: [],
  templateUrl: './primo.component.html',
  styleUrls: ['./primo.component.css']})
export class PrimoComponent {
  numero: number = 10;
  resultado: string = 'é primo'


verificaPrimo(valor: number){
  for(let i=2; i<this.numero; i++){
    if(this.numero%i == 0){
      this.resultado = 'não é primo';
    }
  }
}

constructor(){
  this.verificaPrimo(this.numero);
}

}
