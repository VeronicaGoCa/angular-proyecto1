import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters : Character[] =[{
    id : uuid(),
    name:'Kriller',
    power: 1000
  },
  {
    id : uuid(),
    name:'guku',
    power:9500
  },
  {
    id : uuid(),
    name:'guku',
    power:9500
  },
  {
    id : uuid(),
    name:'guku',
    power:9500
  }

]

addCharacter( character:Character):void{
  console.log( uuid());
  const newCharacter:Character = { ...character, id : uuid() };
  console.log("newCharacter", newCharacter);
  this.characters.push(newCharacter);
}

/* onDeleteCharacter (index:number):void{
  this.characters.splice(index,1); */
deleteCharacterById( id: string){
  this.characters = this.characters.filter(character => character.id !== id);
}

  constructor() { }

}
