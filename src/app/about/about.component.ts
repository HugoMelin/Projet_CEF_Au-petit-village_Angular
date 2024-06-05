import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { TitreH1Component } from '../titres/titre-h1/titre-h1.component';
import { TitreH2Component } from '../titres/titre-h2/titre-h2.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ TitreH1Component, TitreH2Component, NgFor, RouterLink ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  about:any = {}
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
      this.about = this.aboutService.about
  }
}
