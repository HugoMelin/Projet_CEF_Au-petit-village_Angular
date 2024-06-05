import { Component } from '@angular/core';
import { TitreH1Component } from '../titres/titre-h1/titre-h1.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ TitreH1Component],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
