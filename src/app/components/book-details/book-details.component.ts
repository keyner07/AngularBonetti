import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// import { BookService } from '../../core/service/book/book.service';
import {BookService } from '../../core/service/book/book.service';

import { Book } from '../../model/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  books: Book;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params._id;
      this.book(this.id);
      // this.product = this.bookService.getProduct(id);
    });
  }

  book(id: string) {
    this.bookService.getBook(id)
    .subscribe(data => {
      this.books = data;
    });
  }

  eliminateBook() {
    this.bookService.deleteBook(this.id)
    .subscribe(data => {
      alert(`Eliminado correctamente`);
    });
  }

}
