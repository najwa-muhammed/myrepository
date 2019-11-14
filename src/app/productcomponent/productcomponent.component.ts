import { Component, OnInit, ɵConsole } from '@angular/core';
import { ProductserviceService } from '../services/productservice.service'
import { Products } from '../model/product';
@Component({
  selector: 'app-productcomponent',
  templateUrl: './productcomponent.component.html',
  styleUrls: ['./productcomponent.component.css']
})
export class ProductcomponentComponent implements OnInit {

  constructor(private prodserv: ProductserviceService) { }
  products: any;

  ngOnInit() {
    this.getproductservice();
  }

  getproductservice() {
    this.prodserv.getProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    });
  }

}
