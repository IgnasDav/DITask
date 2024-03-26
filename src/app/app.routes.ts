import { Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { LocationsComponent } from './locations/locations.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './characters/details/details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  { path: 'characters/:id', component: DetailsComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: '**', component: HomeComponent },
];
