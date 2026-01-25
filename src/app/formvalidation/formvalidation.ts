import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formvalidation',
  imports: [FormsModule],
  templateUrl: './formvalidation.html',
  styleUrl: './formvalidation.css',
})
export class Formvalidation {

  submitForm(event : any){
    console.log(Event.name)
    console.log(event.name);
    console.log(event.value.name);
    console.log("::-----submit form clicked");
    console.log(event);
  }

  getValue(fullName : any){
    console.log(fullName);
    console.log("full name ngmodel control form triggered");
  }

}
