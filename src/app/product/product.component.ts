import { Component, OnInit } from '@angular/core';
import { ShopDataService } from '../services/shop-data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TitreH3Component } from '../titres/titre-h3/titre-h3.component';
import { TitreH2Component } from '../titres/titre-h2/titre-h2.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ TitreH2Component, RouterLink, TitreH3Component ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  productList:any = {}
  constructor(
    private shopDataService: ShopDataService,
    private activated: ActivatedRoute
  ) {}

  data:any
  produit:any

  ngOnInit(): void {
      this.productList = this.shopDataService.productList

      this.activated.params.subscribe(
        (data) => {
          this.data = data
        })
        this.produit = this.productList.find((item: { id: any; }) => item.id === this.data.id)
  }

}
