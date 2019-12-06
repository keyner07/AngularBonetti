import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUri:string = 'http://localhost:3000/api';
  header = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  createUser(user): Observable<any> {
    let url = `${this.baseUri}/Sign-Up`;
    return this.http.post(url, user,{ headers: this.header})
    .pipe(map(data => data));
  }

  loginUser(user): Observable<any> {
    let url = `${this.baseUri}/Sign-In`;
    return this.http.post(url, user, { headers: this.header})
    .pipe(map(data => {
      this.setToken(data);
      return data;
    }));
  }

  setToken(data: any): void {
    localStorage.setItem('token', data.token);
  }
  getToken() {
    return localStorage.getItem('token');
  }

  setAdmin(admin: any) {
    localStorage.setItem('admin', admin);
  }

  getAdmin() {
    localStorage.getItem('admin');
  }
  logoutUser() {
    localStorage.removeItem('token');
  }


   // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
