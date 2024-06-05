import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titre-h2',
  standalone: true,
  imports: [],
  templateUrl: './titre-h2.component.html',
  styleUrl: './titre-h2.component.css'
})
export class TitreH2Component {
  @Input() titre:any
}
