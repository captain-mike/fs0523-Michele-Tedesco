import { Component } from '@angular/core';
import { PostService } from '../../post.service';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-inactive',
  templateUrl: './inactive.component.html',
  styleUrl: './inactive.component.css'
})
export class InactiveComponent {
  postArr:iPost[] = [];

  constructor(private postSvc:PostService){}

  ngOnInit(){
    this.updatePosts()
  }

  updatePosts(){
    this.postArr = this.postSvc.getInactivePosts()
  }

  toggleStatus(post:iPost){
    this.postSvc.toggleActive(post)
    this.updatePosts()
  }
}
