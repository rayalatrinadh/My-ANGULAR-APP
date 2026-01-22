import { Component } from '@angular/core';
import { Profile } from '../services/profile';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {

  userProfile : any = null;

  constructor(){
    this.userProfile = new Profile();
    console.log('::----- accessing Profile User Array from post component');
    console.log(this.userProfile.userArry);
    
  }

}
