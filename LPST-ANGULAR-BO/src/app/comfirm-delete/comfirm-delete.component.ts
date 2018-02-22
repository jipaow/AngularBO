import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-comfirm-delete',
  templateUrl: './comfirm-delete.component.html',
  styleUrls: ['./comfirm-delete.component.css']
})
export class ComfirmDeleteComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ComfirmDeleteComponent>) {}

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
