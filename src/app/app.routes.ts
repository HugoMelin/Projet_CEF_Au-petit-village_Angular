import { Routes } from '@angular/router';
import { HomeComponent  } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path: "", component: HomeComponent, title: 'Bienvenue Au petit village'},
    {path:"a-propos", component: AboutComponent, title: "A propos de nous - Au petit village"},
    {path: "contact", component: ContactComponent, title: "Nous contacter - Au petit village"},
    { path: 'product/:id', component: ProductComponent }
];
