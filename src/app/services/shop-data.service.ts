import { Injectable } from '@angular/core';
import { products } from '../../data/shopData.json'

@Injectable({
  providedIn: 'root'
})
export class ShopDataService {
  productList:any = products

  constructor() { }
}
