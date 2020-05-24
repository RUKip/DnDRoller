import { Component, OnInit, Inject } from '@angular/core';
import { Character } from '../character';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

export interface DialogData {
  party: Array<Character>;
}

@Component({
  templateUrl: './add-character-form.component.html',
  styleUrls: ['./add-character-form.component.css']
})
export class AddCharacterFormComponent implements OnInit {

  characterForm = this.fb.group({
    name: [null, Validators.required],
    race: [null],
    max_hp: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddCharacterFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    let name = this.characterForm.get('name').value;
    let max_hp = this.characterForm.get('max_hp').value;
    let race = this.characterForm.get('race').value;
    this.data.party.push(new Character(name, race, max_hp, max_hp));
    this.dialogRef.close();
  }
}
