import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sift';

     ngOninit(){
    //function that gets the location and returns it
    function getLocation() {
      if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        console.log("Geo Location not supported by browser");
      }
    }
    //function that retrieves the position
    function showPosition(position) {
      var location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      }
      console.log(location)
    }
    //request for location
    getLocation();


}
    }
