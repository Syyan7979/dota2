import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesDetailsComponent } from '../heroes-details/heroes-details.component';

const routes : Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path : 'heroes', component : HeroesComponent},
  { path : 'home', component : HomeComponent},
  { path : 'heroes/:heroId/details', component : HeroesDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
