import { Component, signal } from '@angular/core';

import { Poslist } from "./poslist/poslist";

@Component({
  selector: 'app-root',
  imports: [Poslist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');

  name : String = 'Trinadh Rayala';


//  changeName(){
//     this.name = "Changed Name : Trinadh Rayala";
//   }
}
