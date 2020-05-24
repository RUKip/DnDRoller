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
    name: ['', Validators.required],
    max_hp: ['0']
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
    this.data.party.push(new Character(0, name, max_hp, max_hp));
    this.dialogRef.close();
  }
}
