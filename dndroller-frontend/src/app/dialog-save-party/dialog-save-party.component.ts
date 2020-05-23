import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from '../character';

export interface DialogData {
  name: string;
  party: Array<Character>;
}

@Component({
  templateUrl: './dialog-save-party.component.html',
  styleUrls: ['./dialog-save-party.component.css']
})
export class DialogSavePartyComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogSavePartyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
