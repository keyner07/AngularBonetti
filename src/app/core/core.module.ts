import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookService } from './service/book/book.service';
import { UserService } from './service/user/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    BookService,
    UserService
  ]
})
export class CoreModule { }
