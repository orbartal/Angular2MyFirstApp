import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  //Object varaible
  name: string;

  constructor() {
   this.name = 'world';
  }

}
