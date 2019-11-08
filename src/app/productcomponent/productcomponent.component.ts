import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/model/product';
@Component({
  selector: 'app-productcomponent',
  templateUrl: './productcomponent.component.html',
  styleUrls: ['./productcomponent.component.css']
})
export class ProductcomponentComponent implements OnInit {

  constructor() { }

  

      title = 'ecommerce-app';
      products: Array<Products> = [{
      name: 'Head and shoulders' ,
      image: 'https://rukminim1.flixcart.com/image/416/416/jly1wnk0/shampoo/k/g/j/675-anti-hairfall-shampoo-head-shoulders-original-imaf8yzznh9hfsav.jpeg?q=70',
      description: 'best seller',
      imageAlt: 'shampoo',
      isAvailable: false ,
      price: 500
  
  },
  {
    name: 'TRESemme' ,
    image: 'https://rukminim1.flixcart.com/image/612/612/js7th8w0/shampoo/z/p/f/580-botanique-nourish-and-replenish-shampoo-tresemme-original-imafdu7bdzadjjys.jpeg?q=70',
    description: 'best seller',
    imageAlt: 'shampoo',
    isAvailable: true ,
    price: 500
  
  },
  {
    name: 'Dove' ,
    image: 'https://rukminim1.flixcart.com/image/612/612/jesunbk0/shampoo/a/c/p/340-nourishing-oil-care-shampoo-dove-original-imaez3azyuy8xzjg.jpeg?q=70',
    description: 'best seller',
    imageAlt: 'shampoo',
    isAvailable: true ,
    price: 500
  
  },
  {
    name: 'WOW' ,
    image: 'https://rukminim1.flixcart.com/image/612/612/jrtj2q80/shampoo/x/f/g/200-apple-cider-vinegar-shampoo-wow-skin-science-original-imafdjeqwtht6u4g.jpeg?q=70',
    description: 'best seller',
    imageAlt: 'shampoo',
    isAvailable: false ,
    price: 500
  
  },
  {
    name: 'Sunsilk' ,
    image: 'https://rukminim1.flixcart.com/image/612/612/jesunbk0/shampoo/h/m/j/340-stunning-black-shine-shampoo-sunsilk-original-imaez7gqkgthjzsh.jpeg?q=70',
    description: 'best seller',
    imageAlt: 'shampoo',
    isAvailable: true ,
    price: 500
  
  },
  {
    name: 'indulekha' ,
    image: 'https://rukminim1.flixcart.com/image/612/612/jvif0y80/shampoo/x/h/a/100-bringha-anti-hairfall-cleanser-shampoo-indulekha-original-imaeyzk8e5h7vyeu.jpeg?q=70',
    description: 'best seller',
    imageAlt: 'shampoo',
    isAvailable: false,
    price: 500
  
  },
  {
    name: 'dhathri' ,
    image:'https://rukminim1.flixcart.com/image/612/612/jesunbk0/shampoo/a/c/p/340-nourishing-oil-care-shampoo-dove-original-imaez3azyuy8xzjg.jpeg?q=70',
    description: 'best seller',
    imageAlt: 'shampoo',
    isAvailable: true ,
    price: 500
  
  },
  {
    name: 'Splendid shampoo' ,
    image: 'https://rukminim1.flixcart.com/image/416/416/jly1wnk0/shampoo/k/g/j/675-anti-hairfall-shampoo-head-shoulders-original-imaf8yzznh9hfsav.jpeg?q=70',
    description: 'best seller',
    imageAlt: 'shampoo',
    isAvailable: false ,
    price: 50
  
  },
  {
    name: 'Splendid shampoo' ,
    image: 'https://rukminim1.flixcart.com/image/416/416/jly1wnk0/shampoo/k/g/j/675-anti-hairfall-shampoo-head-shoulders-original-imaf8yzznh9hfsav.jpeg?q=70',
    description: 'best seller',
    imageAlt: 'shampoo',
    isAvailable: true ,
    price: 500
  
  },
  {
    name: 'Splendid shampoo' ,
    image: 'https://rukminim1.flixcart.com/image/612/612/jv6zi4w0/shampoo/h/e/u/240-health-shampoo-dabur-vatika-original-imafg5zdup9gzfrq.jpeg?q=70',
    description: 'best seller',
    imageAlt: 'shampoo',
    isAvailable: true ,
    price: 500
  
  }];
  ngOnInit() {
  
  }
  
}
