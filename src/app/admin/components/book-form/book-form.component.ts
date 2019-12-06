import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';
import { map } from 'rxjs/operators';

import { Book  } from '../../../model/book';
import { BookService } from '../../../core/service/book/book.service';



@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  hasUnitNumber = false;



  constructor(
    private fb: FormBuilder,
    private bookService: BookService
    ) {}

  addressForm = this.fb.group({
    title: [null, Validators.required],
    author: [null, Validators.required],
    file: [undefined, [ Validators.required, FileValidator.maxContentSize(5242880)]]
  });
  files1 = '';
  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.addressForm.value.title);
    formData.append('author', this.addressForm.value.author);
    formData.append('file', this.files1);
    this.bookService.createBook(formData)
    .subscribe(data => {
      // return data;
      // console.log(data);
      alert('Agregado correctamente');
      this.addressForm.value.title = '';
      this.addressForm.value.author = '';
    });
  }
  onChange(event: any) {
    this.files1 = event.target.files[0];
  }

}
