import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  fetchPosts() {
    return this.http.get('api/getallposts').pipe(
      map((responseData) => {
        // return responseData['posts'].map((post) => {
        //   return post.id + '.' + post.title + ', ' + post.content;
        // });
        return responseData['posts'];
      })
    );
  }

  createAndStrorePost(postData: { title: string; content: string }) {
    this.http
      .post(
        'api/createpost',
        { Post: postData },
        {
          observe: 'response',
          //   observe: 'body',
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf8',
            'Access-Control-Allow-Origin': '*',
          }),
        }
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteAllPosts() {
    return this.http
      .delete('api/deleteallposts', {
        observe: 'events',
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=utf8',
          'Access-Control-Allow-Origin': '*',
        }),
        // responseType: 'json',
        responseType: 'text',
      })
      .pipe(
        tap((event) => {
          console.log(event);
          switch (event.type) {
            case HttpEventType.Sent:
              break;
            case HttpEventType.Response:
              break;
          }
        })
      );
  }
}
