import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  public show = false;

  onRowClicked(event: any) { $("#imagemodal").modal("show"); }

  ngOnInit(): void {

  }

  toggle() {
    this.show = !this.show;
  }

}
