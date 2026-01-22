import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Postservice {
  
  posts : Array<any> = [

    {name : 'Trinadh', description : 'angular v21.0', country : 'USA'},
    {name : 'Kiran', description : 'react v18.0', country : 'INDIA'},
    {name : 'Rayala', description : 'vue v3.0', country : 'United States'},
    {name : 'Harshith', description : 'svelte v4.0', country : 'UK'},
    {name : 'Rakesh', description : 'ember v5.0', country : 'Canada'},
  ]
}
