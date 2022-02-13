import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant.model';
@Injectable({
  providedIn: 'root'
})
export class PlantServicesService {
  baseUrl = "http://localhost:8080/plant"
  
  constructor(private http: HttpClient) { }
  getAll(): Observable<Plant[]> {
    console.log("call all palnts")
    return this.http.get<Plant[]>("http://localhost:8080/plant/getAllPlants");
  }

  update(data: any): Observable<any> {
    return this.http.put("http://localhost:8080/plant/updatePlant",data);
  }
  getUserPlants(id:any):Observable<Plant[]> {
    console.log("call all user palnts" +id);
    return this.http.get<Plant[]>("http://localhost:8080/plant/getUserPlants/"+id);
  }
}
