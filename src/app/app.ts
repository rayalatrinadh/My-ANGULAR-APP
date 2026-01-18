import { Component, signal } from '@angular/core';
import {Profile} from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');

  name : String = 'Trinadh Rayala';


 changeName(){
    this.name = "Changed Name : Trinadh Rayala";
  }
}
