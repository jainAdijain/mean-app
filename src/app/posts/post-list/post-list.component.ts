import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts-service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostComponentList implements OnInit, OnDestroy {

  @Input() posts: Post[] = [];
  postSub: Subscription;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
    this.postSub = this.postsService.postUpdatedListener().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    )
  }

  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
