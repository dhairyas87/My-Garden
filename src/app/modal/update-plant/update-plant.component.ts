import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-update-plant',
  templateUrl: './update-plant.component.html',
  styleUrls: ['./update-plant.component.css']
})
export class UpdatePlantComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdatePlantComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {


  }

  ngOnInit(): void {
    console.log("Update Plant Component")
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
