import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantListComponent } from './components/plant-list/plant-list.component';
import { UserPlantsComponent } from './components/user-plants/user-plants.component';


const routes: Routes = [ { path: '', redirectTo: 'plantslist', pathMatch: 'full' },
{ path: 'plantslist', component: PlantListComponent },
{ path: 'plantslist/:id', component: UserPlantsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
