import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public show = false;

  ngOnInit(): void {
  }
  
  toggle() {
    this.show = !this.show;
  }
}
