import { iPost } from './../../Models/post';
import { Component } from '@angular/core';
import { PostService } from '../../post.service';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrl: './active.component.css'
})
export class ActiveComponent {

  postArr:iPost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(){
    this.updatePosts()
  }

  updatePosts(){
    this.postArr = this.postSvc.getActivePosts()
  }

  toggleStatus(post:iPost){
    this.postSvc.toggleActive(post)
    this.updatePosts()
  }

}
