import { Component } from '@angular/core';

@Component({standalone: true,
  selector: 'app-idade',
  imports: [],
  templateUrl: './idade.component.html',
  styleUrls: ['./idade.component.css']})
export class IdadeComponent {
  idade: number = 19;
  resultado!: string;

  classificaIdade(age: number){
    if(age<0){
      return;
    }
    else if(age<=12){
      this.resultado = 'criança';
    }
    else if(age<=17){
      this.resultado = 'adolescente';
    }
    else if(age<=59){
      this.resultado = 'adulto';
    }
    else{
      this.resultado = 'idoso';
    }
  }

  constructor(){
    console.log("A idade é", this.idade);
    this.classificaIdade(this.idade);

  }

}
