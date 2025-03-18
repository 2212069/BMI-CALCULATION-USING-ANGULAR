import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BmiComponent } from './bmi/bmi.component';

export const routes: Routes = [
    { path: 'bmi', component: BmiComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' } 
];
