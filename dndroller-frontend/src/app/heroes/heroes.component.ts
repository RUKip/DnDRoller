import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CharacterService } from '../character-service.service';
import { Character } from '../character';
import { FormBuilder } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit {

  characterForm;

  constructor(
    private characterService: CharacterService,
    private formBuilder: FormBuilder,
    ) {
    this.characterService = characterService;
    this.characterForm = this.formBuilder.group({
      name: '',
      max_hp: 0
    });
   }

  hero_list: Array<Character> = [];
  enemy_list: Array<Character> = [];

  ngOnInit(): void {
    
  }

  onSubmit() {
    let name = this.characterForm.get('name').value;
    let max_hp = this.characterForm.get('max_hp').value;
    this.hero_list.push(new Character(0, name, max_hp, max_hp));
    this.characterForm.reset();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
