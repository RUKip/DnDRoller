import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  templateUrl: './dialog-load-party.component.html',
  styleUrls: ['./dialog-load-party.component.css']
})
export class DialogLoadPartyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogLoadPartyComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close('cancelled');
  }

}
