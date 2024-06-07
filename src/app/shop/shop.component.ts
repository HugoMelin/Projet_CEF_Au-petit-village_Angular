import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ShopDataService } from '../services/shop-data.service';
import { TitreH3Component } from '../titres/titre-h3/titre-h3.component';
import { FormsModule } from '@angular/forms';
import { FiltrePipe } from '../pipes/filtre.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NgFor, TitreH3Component, FormsModule, FiltrePipe, SortPipe, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit{
  searchTerm:string = ""
  tri:string = ""

  productList:any = {}
  constructor(private shopDataService: ShopDataService) {}

  ngOnInit(): void {
      this.productList = this.shopDataService.productList
  }
}
