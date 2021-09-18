import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // loadedPosts = [{ title: 'title 1', contetn: 'content 1' }];
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // console.log(postData);
    this.postService.createAndStrorePost(postData);
  }

  onFetchPost() {
    // console.log('Fetch Post');
    this.isFetching = true;
    this.fetchPosts();
  }

  onClearPosts() {
    // console.log('Clear Posts');
    this.postService.deleteAllPosts().subscribe(
      (response) => {
        // }) =>    (response: {
        //   errors: string[];
        //   numberOfDeletedPosts: number;
        //   requestSuccess: true;
        // }) => {
        console.log(response);
        // alert('Deleted ' + response.numberOfDeletedPosts + ' posts');
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  private fetchPosts() {
    this.postService.fetchPosts().subscribe(
      (response) => {
        // console.log(response);
        this.isFetching = false;
        this.loadedPosts = response;
      },
      (error) => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }

  onHandleError() {
    // console.log('Handle error');
    this.error = null;
  }
}
