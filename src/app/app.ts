import { Component, signal } from '@angular/core';
import {UpperCasePipe, LowerCasePipe,CurrencyPipe, DatePipe} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [UpperCasePipe, 
    LowerCasePipe,
    CurrencyPipe,
    DatePipe,
   ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');

  nameTitle : string = 'trinadh rayala';

  amountToDisplay : number = 777.757;

  todayDate : Date = new Date();

  trinadhUser : any = {
    name : 'Trinadh Rayala',
    age : 26,
    email : '3nadhmail@gmail.com'
  }
}
