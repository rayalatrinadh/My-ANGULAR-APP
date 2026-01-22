import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Profile {

  userArry = [
    { id: 1, name: 'Trinadh', age: 26 },
    { id: 2, name: 'Kiran', age: 27 },
    { id: 3, name: 'Ravi', age: 28 },
    { id: 4, name: 'Suresh', age: 29 },
  ];
  

  constructor(){
    console.log('::-----Profile Service Initialized');
  }
}
