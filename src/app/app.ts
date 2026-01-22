import { Component, signal } from '@angular/core';
import {Profile} from './profile/profile';
import { Post } from "./post/post";

@Component({
  selector: 'app-root',
  imports: [Profile, Post],
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
