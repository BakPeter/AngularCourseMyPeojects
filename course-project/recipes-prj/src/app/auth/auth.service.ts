import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { User } from './user.model';

export interface AuthResponseData {
  email: string;
  id: number;
  token: string;
  tokenExperationDate: Date;
  errors: string[];
  register?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user: Subject<User> = new Subject();

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'api/authloginuser',
        { email: email, password: password },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf8',
            'Access-Control-Allow-Origin': '*',
          }),
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.id + '',
            resData.token,
            resData.tokenExperationDate
          );
        })
      );
  }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'api/authsignupuser',
        { email: email, password: password },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf8',
            'Access-Control-Allow-Origin': '*',
          }),
        }
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.id + '',
            resData.token,
            resData.tokenExperationDate
          );
        })
      );
  }

  private handleAuthentication(
    email: string,
    id: string,
    token: string,
    tokenExperationDate: Date
  ) {
    //expiresIn - seconds to experation
    //const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, id, token, tokenExperationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    return throwError(errorRes.error);
  }
}
