import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../model/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() item: any;
  constructor() { }

  ngOnInit() {
  }

}
