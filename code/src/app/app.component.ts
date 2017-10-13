import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.html'
})

export class AppComponent {
  //Object varaible
  target: string;

  constructor() {
   this.target = 'world';
  }

}
