import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endpoint: string = '/api/products';

  constructor(private http: HttpClient) { }
  
  getProducts(): any {
    return this.http.get(this.endpoint);
  }

  deleteProduct(product: Product): any {
    return this.http.delete(`${this.endpoint}/${product.id}`);
  }
}
