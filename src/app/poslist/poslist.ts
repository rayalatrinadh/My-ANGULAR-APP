import { Component } from '@angular/core';
import { Postservice } from '../services/postservice';
import { Post } from '../post/post';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-poslist',
  imports: [JsonPipe],
  templateUrl: './poslist.html',
  styleUrl: './poslist.css',
})
export class Poslist {

  posts :  Array<any> = [];

  constructor(private postService : Postservice){
    this.posts = this.postService.posts;
  }

 
  

}
