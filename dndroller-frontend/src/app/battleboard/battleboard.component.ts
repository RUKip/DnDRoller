import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CdkDragDrop, moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-battleboard',
  templateUrl: './battleboard.component.html',
  styleUrls: ['./battleboard.component.css']
})
export class BattleboardComponent implements OnInit {

  battle_list: Array<Character> = [];

  constructor() { 
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<Character[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray<Character>(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const clone = cloneDeep(event.previousContainer.data[event.previousIndex]);

       // Add the clone to the new array.
      event.container.data.splice(event.currentIndex, 0, clone);
    }
  }

  closeCharacter(character) {
    let index = this.battle_list.indexOf(character);
    this.battle_list.splice(index, 1);
  }

  walk(list: Array<Character>) {
    list.push(list.shift());
  }

  rollInitiative(list: Array<Character>) {
    list.map((character: Character) => {
      character.initiative = this.getRandomNumber(1,20) + character.stats.asModifier(character.stats.dex);
    });

    list.sort(function (character1: Character, character2: Character) {
      return character2.initiative - character1.initiative;
    });
  }

  //+1 for max to make it inclusive
  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max+1 - min) + min);
  }
}
