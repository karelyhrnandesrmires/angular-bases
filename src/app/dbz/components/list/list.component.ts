import { Character } from './../../interfaces/character.interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks', power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  // public onDelete2 = new EventEmitter<number>(); // tambien se puede de esta manera

  // public onDeleteCharacter(character: Character): void {
  public onDeleteCharacter(id?: string): void {
    //TODO: Emitir el ID del personaje
    // console.log(index);
    // console.log({ character }); //aparece el nombre del atributo del objeto

    if (!id) return;
    console.log({ id });

    // this.onDelete.emit(character.id);
    this.onDelete.emit(id);
  }

}
