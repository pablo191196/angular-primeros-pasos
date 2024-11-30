import { Injectable } from '@angular/core';
import { v4 as genID } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[]=[{
    id: genID(),
    name:'Krillin',
    power:1000
  },{
    id: genID(),
    name:'Goku',
    power:9500
  },{
    id: genID(),
    name:'Vegeta',
    power:7500
  }];


  addCharacter(character:Character): void {
    // Crear una copia independiente del objeto antes de agregarlo
    const newCharacter: Character = {id:genID(), ...character }; //operador de propagación (spread operator) de JavaScript. Es una característica útil
    // que se utiliza para crear una copia superficial (shallow copy) de un objeto o un arreglo

    // Agregar la copia al arreglo
    this.characters.push(newCharacter);

  };


  // onDeleteCharacter(id:number):void{
  //   this.characters.splice(id,1);
  //   console.log(this.characters);
  // }

  deleteCharacterById(id:string){
    this.characters=this.characters.filter(character=>character.id!==id);
  }

}
