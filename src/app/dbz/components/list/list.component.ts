import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListDBZComponent {
  @Output()
  public deleteId:EventEmitter<string>=new EventEmitter();

  @Input()
  public characterList: Character[]=[{
    name:'Trunks',
    power:10
  }];


  onDeleteCharacter(index:number):void{

    console.log(index)
  };


  onDeleteId(id:string):void{
    this.deleteId.emit(id)
  }
}
