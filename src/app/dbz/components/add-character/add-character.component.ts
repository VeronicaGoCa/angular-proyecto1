import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interfaces';



@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  /*
  conectarme
  */

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name: '',
    power: 10
  };

  emitCharacter():void{

    console.log("Emiter", this.character);
    if(this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character= { name:'', power:0};
}
}