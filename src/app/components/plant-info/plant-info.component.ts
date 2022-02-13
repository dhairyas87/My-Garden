import { Component, OnInit, Input } from '@angular/core';
import { Plant } from '../../models/plant.model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdatePlantComponent } from '../../modal/update-plant/update-plant.component';
import { PlantServicesService } from '../../services/plant-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plant-info',
  templateUrl: './plant-info.component.html',
  styleUrls: ['./plant-info.component.css']
})
export class PlantInfoComponent implements OnInit {
  @Input() plant: Plant;

  constructor(public dialog: MatDialog, private plantService: PlantServicesService,private route: ActivatedRoute) { }

  name: any;
  description: any;
  image: any;
  id:any;


  ngOnInit(): void {
    this.name = this.plant.name;
    this.description = this.plant.description;
    this.image = this.plant.image;
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
      console.log("Id"+this.id);
  })
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(UpdatePlantComponent, {
      width: '500px',
      data: { name: this.plant.name, description: this.plant.description, image: this.plant.image }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result" + result);

      if (result != undefined) {


        this.plant.name = result.name;
        this.plant.description = result.description;
        this.plant.image = result.name;
        console.log(this.plant);
        this.name = this.plant.name;
        this.description = this.plant.description;
        this.image = this.plant.image;

        this.plantService.update(this.plant)
          .subscribe({
            next: (data) => {

              console.log(data);
            },
            error: (e) => console.error(e)
          });

      }
    });
  }
  addToList(){
    this.plantService.addPlantToUserList(1,this.plant.id,this.plant) .subscribe({
      next: (data) => {

        console.log(data);
      },
      error: (e) => console.error(e)
    });;
  }
}