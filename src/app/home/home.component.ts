import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { TitreH1Component } from '../titres/titre-h1/titre-h1.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitreH1Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  about:any = {}
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
      this.about = this.aboutService.about
  }
}
