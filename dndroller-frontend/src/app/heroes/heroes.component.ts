import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CharacterService } from '../character-service.service';
import { Character } from '../character';
import { FormBuilder } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop'; 
import {MatDialog} from '@angular/material/dialog';
import { DialogSavePartyComponent } from '../dialog-save-party/dialog-save-party.component';
import { AddCharacterFormComponent } from '../add-character-form/add-character-form.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DialogLoadPartyComponent } from '../dialog-load-party/dialog-load-party.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesComponent implements OnInit {

  characterForm;
  loaded_party_name;

  hero_list: Array<Character> = [];
  enemy_list: Array<Character> = [];

  constructor(
    private characterService: CharacterService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    ) {
    this.characterService = characterService;
    this.characterForm = this.formBuilder.group({
      name: '',
      max_hp: 0
    });
   }

  ngOnInit(): void {
    
  }

  drop(event: CdkDragDrop<Character[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray<Character>(event.container.data, event.previousIndex, event.currentIndex);
    } else if ('enemy_list' === event.container.id || 'hero_list' === event.container.id) {
      transferArrayItem<Character>(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem<Character>(
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
      data: {name: this.loaded_party_name, party: this.hero_list}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != 'cancelled') {
        this.characterService.saveParty(result, this.hero_list).subscribe(result => {
          let  message = "Failed, there was a problem saving your party"
          if(result.status == 200) {
            message = "Success! Party saved"
          }
          this.openSnackBar(message)
        });
      }
    });
  }

  loadDialog(): void {
    const dialogRef = this.dialog.open(DialogLoadPartyComponent, {
      width: '600px',
    });
  }

  addCharacterDialog(): void {
    const dialogRef = this.dialog.open(AddCharacterFormComponent, {
      width: '600px',
      data: {party: this.hero_list}
    });
    dialogRef.afterClosed().subscribe(() => {
        this.hero_list = dialogRef.componentInstance.data.party;
        this.cdRef.detectChanges();
    });
  }

  closeCharacter(list, character) {
    let index = list.indexOf(character);
    list.splice(index, 1);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }
}
