import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-battleboard',
  templateUrl: './battleboard.component.html',
  styleUrls: ['./battleboard.component.css']
})
export class BattleboardComponent implements OnInit {

  battle_list: Array<Character> = [];

  constructor() { 
    this.battle_list.push(new Character(1, 'hello!'))
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
    }
  }

  closeCharacter(character) {
    console.log("clicked");
    let index = this.battle_list.indexOf(character);
    this.battle_list.splice(index, 1);
  }
}
