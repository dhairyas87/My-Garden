import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantInfoComponent } from './components/plant-info/plant-info.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UpdatePlantComponent } from './modal/update-plant/update-plant.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPlantsComponent } from './components/user-plants/user-plants.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlantComponent,
    PlantListComponent,
    PlantInfoComponent,
    UpdatePlantComponent,
    UserPlantsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [UpdatePlantComponent],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
