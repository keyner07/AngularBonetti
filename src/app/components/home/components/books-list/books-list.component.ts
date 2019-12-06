import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../../core/service/book/book.service';
import { Book } from '../../../../model/book';



@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService) { }
  ngOnInit() {
    this.fetchBooks();
  }

  fetchBooks() {
    this.bookService.getAllBooks()
    .subscribe(books => {
      this.books = books;
    });
}

}

