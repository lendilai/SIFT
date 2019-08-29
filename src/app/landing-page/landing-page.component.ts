import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public searchterm: string;
  public products: string;

  constructor(private auth: AuthService, private prod: ProductService, private router: Router) { }

  searchProduct() {
    this.prod.searchProduct(this.searchterm).subscribe(res => {
      this.products = JSON.stringify(res);
      console.log(this.products);
      localStorage.setItem('products', this.products);
      this.router.navigate(['/retailers']);
    },
    err => {
      console.log(err);
      alert('Could not find the item you\'re looking for');
    });
  }

  ngOnInit() {
  }

}
