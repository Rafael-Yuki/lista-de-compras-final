import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  variavel_lista : string[] = [];
  texto = ""

  adiciona() {
    if (!(this.texto == "")) {
      this.variavel_lista.push(this.texto);
      this.texto = "";
    }

  }

  //*ngFor = "let ___ of _______" ex: *ngFor = "let item of variavel_lista"
  //[(ngModel)]="texto" -> input

}
