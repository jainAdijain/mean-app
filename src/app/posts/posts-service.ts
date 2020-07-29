import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class PostsService {

  posts: Post[] = [];
  postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }


  getPosts() {
    return this.http.get<{ message: string, posts: Post[] }>('http://localhost:3000/api/posts').subscribe(
      (postData) => {
        this.posts = postData.posts;
        this.postUpdated.next([...this.posts]);
      })
  }

  postUpdatedListener() {
    return this.postUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post = { id: null, title, content };
    this.http.post<{ message: string }>('http://localhost:3000/api/posts', post).subscribe(
      (responseData) => {
        console.log(responseData.message);
      }
    )
    this.posts.push(post);
    this.postUpdated.next([...this.posts]);
  }
}
