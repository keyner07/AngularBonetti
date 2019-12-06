import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { UserService } from '../user/user.service';

import { Book } from '../../../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {




  baseUri: string = '/api/user';
  header = new HttpHeaders({
    'Access-Control-Allow-Origin' : 'http://localhost:3000',
    'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, Access-Control-Allow-Origin',
    'Accept': 'multipart/form-data',
     'Authorization': `Bearer ${this.userService.getToken()}`
  });
  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }


  createBook(book: any): Observable<any> {
    // this.header.set('Content-Type', 'multi/form-data');
    // this.header.append('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUri}/uploadBook`;
    return this.http.post(url, book, { headers: this.header})
    .pipe(map(data => data));
  }
  getAllBooks(): Observable<any> {
    const url = `${this.baseUri}/listBook`;
    return this.http.get(url, { headers: this.header})
    .pipe(map(data => data));
  }

  getBook(id: string): Observable<any> {
    this.header.set('Content-Type', 'application/json');
    this.header.append('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUri}/${id}`;
    return this.http.get(url, { headers: this.header })
    .pipe(map((data) => { return data }));
  }

  editBook(id: string, title: string, author: string): Observable<any> {
    console.log(`autor ${author}, title ${title}`);
    this.header.set('Content-Type', 'application/json');
    this.header.append('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUri}/${id}`;
    return this.http.put(url, { title: `${title}`, author: `${author}`}, {headers: this.header})
    .pipe(map(data => data));
  }

  deleteBook(id: string): Observable<any> {
    this.header.set('Content-Type', 'application/json');
    this.header.append('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUri}/${id}`;
    return this.http.delete(url)
    .pipe(map(data => data));
  }

  searchBook(search: string): Observable<any> {
    this.header.set('Content-Type', 'application/json');
    this.header.append('Authorization', `Bearer ${this.getToken()}`);
    const url = `${this.baseUri}/searchBook?search=${search}`;
    return this.http.get(url)
    .pipe(map(data => data));
  }

  getToken() {
    localStorage.getItem('token');
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
