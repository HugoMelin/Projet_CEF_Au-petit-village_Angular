import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { TitreH1Component } from '../titres/titre-h1/titre-h1.component';
import { TitreH2Component } from '../titres/titre-h2/titre-h2.component';
import { ShopComponent } from '../shop/shop.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, TitreH1Component, TitreH2Component, ShopComponent],
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
