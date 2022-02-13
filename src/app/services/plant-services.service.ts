import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlantServicesService {
  
  private API_URL= environment.API_URL;
  constructor(private http: HttpClient) { }
  getAll(): Observable<Plant[]> {

    console.log("call all palnts")
    return this.http.get<Plant[]>(this.API_URL+"/getAllPlants");
  }

  update(data: any): Observable<any> {
    return this.http.put(this.API_URL+"/updatePlant",data);
  }
  addNewPlant(data: any): Observable<any> {
    return this.http.post(this.API_URL+"/addNewPlant",data);
  }
  getUserPlants(id:any):Observable<Plant[]> {
    console.log("call all user palnts" +id);
    return this.http.get<Plant[]>(this.API_URL+"/getUserPlants/"+id);
  }

  addPlantToUserList(userid:any,plantid:any,plant:Plant){
    return this.http.post(this.API_URL+"/addUserPlant/"+userid+"/"+plantid,{});
  }

}
