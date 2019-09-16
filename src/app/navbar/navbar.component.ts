import { Component, OnInit } from '@angular/core';
declare var $: any
import { from } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private auth:AuthService, private router:Router) { }
  authenticated = JSON.parse(localStorage.getItem('authenticated'));
  ngOnInit() {
    $('.nav-menu > ul').slicknav({
      'prependTo': '.mobile_menu'
    });

    console.log(this.authenticated);
  }
  signOut(){
    this.authenticated = false;
    this.router.navigate(['sign-in']);
    console.log(this.authenticated);

  }

}
