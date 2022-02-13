import { Component, OnInit } from '@angular/core';
import { PlantServicesService } from '../../services/plant-services.service';
import { Plant } from '../../models/plant.model';
import { UpdatePlantComponent } from '../../modal/update-plant/update-plant.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
plants:Plant[];
newPlant:Plant={name:"",description:"",image:""};
  constructor(public dialog: MatDialog,private plantService:PlantServicesService) { }

  ngOnInit(): void {
    console.log("In here")
   this.getAllPlants();
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(UpdatePlantComponent, {
      width: '500px',
      data: { name: "", description: "", image: ""}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("Result" + result);

      if (result != undefined) {


        this.newPlant.name = result.name;
        this.newPlant.description = result.description;
        this.newPlant.image = result.name;
        console.log(this.newPlant);
        this.plantService.addNewPlant(this.newPlant)
          .subscribe({
            next: (data) => {
              this.plants.push(this.newPlant);
              console.log(data);
            },
            error: (e) => console.error(e)
          });

      }
    });
  }
  getAllPlants():void{
    this.plantService.getAll()
    .subscribe({
      next: (data) => {
        this.plants = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  _addItemToAllMyGarden(plantid:any,type:any):void{}

}
