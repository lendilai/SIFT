import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
declare var $: any
import { from } from 'rxjs';

=======
>>>>>>> 9dff0002a04a00598a14fd09de57135eaab4d310

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
<<<<<<< HEAD
    $('.nav-menu > ul').slicknav({
      'prependTo': '.mobile_menu'
    });
=======
>>>>>>> 9dff0002a04a00598a14fd09de57135eaab4d310
  }

}
