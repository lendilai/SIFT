
import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(public auth: AuthService, private prod: ProductService) {}
  title = 'SIFT-Frontend';
  latitude: number;
  longitude: number;
  zoom: number;
  coordinates = {latitude: 0, longitude: 0};
  public location: string;
  public locations: string;

  ngOnInit() {
    this.setCurrentLocation();
  }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
          this.coordinates.latitude = this.latitude;
          this.coordinates.longitude = this.longitude;
          console.log(this.coordinates);
          this.getNearestRetailers(this.coordinates);
        });
      }
    }
    getNearestRetailers(location) {
      this.prod.getNearestShops(location).subscribe(res => {
        this.location = JSON.stringify(res);
        // console.log(this.location);
        localStorage.setItem('locations', this.location);
      },
      err => {
        console.log(err);
        alert('Could not get your location, please refresh your browser');
      });
    }

}
