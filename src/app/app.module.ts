import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantInfoComponent } from './components/plant-info/plant-info.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddPlantComponent,
    PlantListComponent,
    PlantInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
