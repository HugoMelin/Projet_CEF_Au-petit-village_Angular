import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ShopDataService } from '../services/shop-data.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor],
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
