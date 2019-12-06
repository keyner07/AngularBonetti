import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BookService } from '../../core/service/book/book.service';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {
    addressForm = this.fb.group({
    author: null,
    title: null
  });

    hasUnitNumber = false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router
    ) { }
    id;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params._id;
      // this.product = this.bookService.getProduct(id);
    });
  }

  onSubmit() {
    this.bookService.editBook(this.id,this.addressForm.value.title, this.addressForm.value.author)
    .subscribe(data => {
      alert(`Actualizado ${data}`);
    })
  }

}
