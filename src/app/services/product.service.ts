import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private searchUrl = 'https://siftsearch.herokuapp.com/products/?search=';
  private retailerUrl = 'https://siftsearch.herokuapp.com/retailers/';

  constructor(private http: HttpClient) { }

  searchProduct(product) {
    // this.searchUrl = this.searchUrl + product;
    console.log(this.searchUrl);
    return this.http.get<any>(this.searchUrl + product);
  }
  getNearestShops(coordinates) {
    return this.http.post<any>(this.retailerUrl, coordinates);
  }


}
