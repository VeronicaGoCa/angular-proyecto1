import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.components.html'
})

export class MainPageComponent {
  constructor( private dbzService: DbzService){
  }

  get characters():Character[]{
    return [...this.dbzService.characters]; /**Spread para hacer copia*/
  }

  onDeletecharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter( character: Character):void{
    this.dbzService.addCharacter(character);
  }
}
