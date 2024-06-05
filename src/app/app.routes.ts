import { Routes } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, title: 'Bienvenue Au petit village'},
    {path:"a-propos", component: AboutComponent, title: "Nous contacter - Au petit village"}
];
