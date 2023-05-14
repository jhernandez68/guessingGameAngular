import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GuessTheNumber';

  numeroDelUsuario!:number;

  randomNumber: number;


  constructor(private renderer: Renderer2){
    this.numeroDelUsuario;
    this.randomNumber =  Math.floor(Math.random() * 100) + 1;

    console.log(this.randomNumber);
  }

  adivinarNumero(textoGanador: HTMLElement){
    if(this.numeroDelUsuario ==  this.randomNumber){
      this.renderer.removeClass(textoGanador, 'oculto');
      alert('Has adivinado');
    }else if (this.numeroDelUsuario > this.randomNumber){
      alert('El numero es menor');
    }else if(this.numeroDelUsuario < this.randomNumber){
      alert('El numero es mayor');
    } else {
      alert("Sigue intentando");
    }
  }

  generarNumero(textoGanador: HTMLElement){
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.renderer.addClass(textoGanador, 'oculto');
    console.log(this.randomNumber) 
  }



  ngOnInit() {
    
  }
}
