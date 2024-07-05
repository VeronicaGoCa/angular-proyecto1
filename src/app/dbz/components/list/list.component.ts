import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  /*
    Recibe una property de tipo characterList
    se puede modificar el nombre a recibior o el nomnre por defecto
  */
  @Input()
  public characterList : Character[]=[
    {
      name: 'Trunk',
      power: 10
    }
  ]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  deleteCharacterById(index?: string):void {
    //TODO el Id del personaje
    if( !index ) return;
    console.log({index})
    this.onDelete.emit(index);

  }
}
