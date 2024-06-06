import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titre-h3',
  standalone: true,
  imports: [],
  templateUrl: './titre-h3.component.html',
  styleUrl: './titre-h3.component.css'
})
export class TitreH3Component {
  @Input() titre:any
}
