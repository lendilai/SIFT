import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-retailers',
  templateUrl: './retailers.component.html',
  styleUrls: ['./retailers.component.css']
})
export class RetailersComponent implements OnInit {
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
  }

}
