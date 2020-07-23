import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Billy Craig';

  public show = false;

  ngOnInit(): void {
  }
  
  toggle() {
    this.show = !this.show;
  }
}
