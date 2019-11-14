import { Injectable } from '@angular/core';
import { Products } from 'src/app/model/product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  private products: any;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('http://localhost:3000/product/');
  }

  addproducts(product: Products) {
    return this.http.post('http://localhost:3000/product/', product );
  }
  detailDisplay(id) {
    return this.http.get('http://localhost:3000/product/' + id );
  }
  updateProducts(formdata, id) {
    return this.http.put('http://localhost:3000/product/' + id, formdata );

  }

}
