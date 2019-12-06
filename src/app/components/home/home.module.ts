import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListComponent } from './components/books-list/books-list.component';
import { HomeComponent } from './components/home/home.component';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    BooksListComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule {

}
