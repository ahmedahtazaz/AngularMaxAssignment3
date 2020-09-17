import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-max-assignment3';
  showPassword = false;
  clicks = [];

  onDetailsClick = () => {
    this.clicks.push(Date.now());
    this.showPassword = !this.showPassword;
  }

  getBackGround = index => {
    return index >= 5 ? 'blue' : 'transparent';
  }
}
