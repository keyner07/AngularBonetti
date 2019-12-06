import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksEditComponent } from './components/books-edit/books-edit.component';


// import { BookService } from './core/service/book/book.service';
// import { UserService } from './core/service/user/user.service';
import { UserSignUpComponent } from './components/user-sign-up/user-sign-up.component';
import { UserSignInComponent } from './components/user-sign-in/user-sign-in.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/components/home/home.component';
import { BooksListComponent } from './components/home/components/books-list/books-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksEditComponent,
    UserSignUpComponent,
    UserSignInComponent,
    PageNotFoundComponent,
    BookDetailsComponent,
    LayoutComponent,
    HomeComponent,
    BooksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  exports: [
    AppComponent,
    BooksEditComponent,
    UserSignUpComponent,
    UserSignInComponent,
    PageNotFoundComponent,
    BookDetailsComponent,
    LayoutComponent,
    HomeComponent,
    BooksListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
