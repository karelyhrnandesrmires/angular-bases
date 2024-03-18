import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';// npm i uuid then for error: npm i --save-dev @types-uuid

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  public characters: Character[] = [{
    id: uuid(), name: 'Krilin', power: 1000
  }, {
    id: uuid(), name: 'Goku', power: 9500
  }, {
    id: uuid(), name: 'Vegeta', power: 7500
  }]


  addCharacter(character: Character): void {
    // console.log('MainPage');
    // console.log(character);

    const newCharacter: Character = {
      //id:uuid(), name: character.name, power: character.power
      id: uuid(), ...character // ... traer todas las propiedades de un objeto
    }

    // this.characters.unshift();//agregar al inicio del arreglo
    // this.characters.push(character); //agregar al final del arreglo|
    this.characters.push(newCharacter);
  }

  //por posicion del arreglo
  // onDeleteCharacter(position: number) {

  //   this.characters.splice(position, 1); // 1; indica cuantos

  // }

  //por id
  deleteCharacterById(id: string) {

    this.characters = this.characters.filter(character => character.id !== id);

  }

}
