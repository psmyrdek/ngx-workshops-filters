import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-workshops-library';
  value: string = ''

  setValue(value: string) {
    this.value = value;
  }
}
