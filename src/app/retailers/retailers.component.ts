import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.css']
})
export class RetailersComponent implements OnInit {
  public prod: string;
  products;
  public retail: string;
  retailers;
  dealers = [];
  private minPrice: number;
  private maxPrice: number;
  private modalIsVisible:boolean = false;
  private ratingVisible:boolean = false;
  private ratingValue;
  minValue:number = 500;
  maxValue: number = 30000;
  options:Options = {
    floor: 0,
    ceil: 50000,
    animate:false,
    translate: (value:number, label:LabelType): string => {
      switch(label){
        case LabelType.Low:
          this.minPrice = value;
          return "<b></b>" + value;
        case LabelType.High:
          this.maxPrice = value;
            return "<b></b>" + value;
            default:
              return "Kes"+ value;
      }
    }
  };
  toggle(){
    this.modalIsVisible  = !this.modalIsVisible;
    this.ratingVisible = false;
  }

  toggleRating(){
    this.ratingVisible = !this.ratingVisible;
    this.modalIsVisible = false;
  }

  constructor() { }
  ngOnInit() {
    this.prod = localStorage.getItem('products');
    this.products = JSON.parse(this.prod);
    console.log(this.products);
    this.retail = localStorage.getItem('locations');
    this.retailers = JSON.parse(this.retail);
    if (this.retailers.length < 1) {
      alert('This service couldn\'t get your location, Please allow browser to access your location');
    }
    for ( let i = 0; i < this.retailers.length; i++) {
      for (let j = 0; j < this.products.length; j++) {
        if (this.products[j].retailer === this.retailers[i].id) {
          this.retailers[i].products = this.products[j];
          this.dealers.push(this.retailers[i]);
        }
      }
    }
    console.log(this.dealers);
  }

}
