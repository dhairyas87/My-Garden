import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from '../models/plant.model';
@Injectable({
  providedIn: 'root'
})
export class PlantServicesService {

  
  constructor(private http: HttpClient) { }
  getAll(): Observable<Plant[]> {
    console.log("call all palnts")
    return this.http.get<Plant[]>("http://localhost:8080/api/plants");
  }
 
}
