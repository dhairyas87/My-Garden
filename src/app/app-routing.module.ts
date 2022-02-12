import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { PlantInfoComponent } from './components/plant-info/plant-info.component';
import { AddPlantComponent } from './components/add-plant/add-plant.component';

const routes: Routes = [ { path: '', redirectTo: 'plantslist', pathMatch: 'full' },
{ path: 'plantslist', component: PlantListComponent },
{ path: 'plantslist/:id', component: PlantInfoComponent },
{ path: 'add-plant', component: AddPlantComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
