import { Component, OnInit } from '@angular/core';
import { PlantServicesService } from '../../services/plant-services.service';
import { Plant } from '../../models/plant.model';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css']
})
export class PlantListComponent implements OnInit {
plants?:Plant[];

  constructor(private plantService:PlantServicesService) { }

  ngOnInit(): void {
    console.log("In here")
   this.getAllPlants();
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
