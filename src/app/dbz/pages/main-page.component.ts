import { DBZService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page-component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DBZService) {

  }

  get characters(): Character[] {
    return [...this.dbzService.characters];

  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
