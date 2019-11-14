import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { ProductserviceService } from '../services/productservice.service';
import { ActivatedRoute } from '@angular/router';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  id: any;
  myForm: FormGroup;
  data:any;

  constructor(
    private productserviceService: ProductserviceService, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.id = +params.id;
    console.log('this.id');
    // tslint:disable-next-line: whitespace
    this.productserviceService.detailDisplay(this.id).subscribe(response=> {
      this.data = response;
      this.myForm.patchValue({
        title: this.data.title,
        imageUrl: this.data.imageUrl,
        description: this.data.description,
        price: this.data.price,
        isAvailable: this.data.isAvailable
      })
    ; });
    this.myForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imageUrl: new FormControl('', Validators.required),
      description: new FormControl(),
      price: new FormControl(),
      isAvailable: new FormControl(),

    });

  });
  }
  onSubmit(form: FormGroup) {
   if (this.id) {
     this.productserviceService.updateProducts(form.value, this.id).subscribe(response => {
     console.log(response);
     });

   } else {
      // tslint:disable-next-line: align
      this.productserviceService.addproducts(this.myForm.value).subscribe(response => {
      console.log(response); });
      }
  }
}
