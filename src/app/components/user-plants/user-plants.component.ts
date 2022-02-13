import { Component, OnInit } from '@angular/core';
import { Plant } from '../../models/plant.model';
import { PlantServicesService } from '../../services/plant-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-plants',
  templateUrl: './user-plants.component.html',
  styleUrls: ['./user-plants.component.css']
})
export class UserPlantsComponent implements OnInit {

  plants?:Plant[];

  constructor(private route: ActivatedRoute,private plantService:PlantServicesService) { }
  id:any;
  ngOnInit(): void {
    console.log("In here")
    this.route.paramMap.subscribe( paramMap => {
      this.id = paramMap.get('id');
      this.getUserPlants(this.id);
      console.log("Id"+this.id);
  })
   
  }
  getUserPlants(id:any):void{
    this.plantService.getUserPlants(id)
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
