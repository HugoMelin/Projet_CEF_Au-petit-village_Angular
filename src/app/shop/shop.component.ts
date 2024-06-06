import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ShopDataService } from '../services/shop-data.service';
import { TitreH3Component } from '../titres/titre-h3/titre-h3.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, TitreH3Component],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  productList:any = {}
  constructor(private shopDataService: ShopDataService) {}

  ngOnInit(): void {
      this.productList = this.shopDataService.productList
  }
}
