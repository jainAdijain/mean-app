import { Injectable } from '@angular/core';

import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class PostsService {

  posts: Post[] = [];
  postUpdated = new Subject<Post[]>();


  getPosts() {
    return [...this.posts];
  }

  postUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post = { title, content };
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
