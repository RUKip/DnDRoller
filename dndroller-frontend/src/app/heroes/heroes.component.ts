import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CharacterService } from '../character-service.service';
import { Character } from '../character';
import { FormBuilder } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop'; 
import { MatDialog } from '@angular/material/dialog';
import { DialogSavePartyComponent } from '../dialog-save-party/dialog-save-party.component';

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
    public dialog: MatDialog,
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
      copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );
    }
  }

  saveDialog(): void {
    const dialogRef = this.dialog.open(DialogSavePartyComponent, {
      width: '600px',
      data: {name: '', party: this.hero_list}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.characterService.saveCharacters(result.name, result.party);
    });
  }

  loadDialog(): void {

  }
}
