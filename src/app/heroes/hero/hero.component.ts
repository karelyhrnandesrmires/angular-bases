import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getheroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'spiderman';

  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;

    //evitar asignar valores con este funcinamiento, hacerlo como el anterior (desde ciclo de deteccion de cambios en variables) 
    // document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
  }

  //ngIf; SIRVE PARA APARECER UN DESAPARECER UN COMPONENTE

}
