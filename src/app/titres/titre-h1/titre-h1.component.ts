import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titre-h1',
  standalone: true,
  imports: [],
  templateUrl: './titre-h1.component.html',
  styleUrl: './titre-h1.component.css'
})
export class TitreH1Component{
  @Input() titre:any
}
