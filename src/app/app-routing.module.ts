import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


import { BooksEditComponent } from '../app/components/books-edit/books-edit.component';
import { UserSignInComponent } from '../app/components/user-sign-in/user-sign-in.component';
import { UserSignUpComponent } from '../app/components/user-sign-up/user-sign-up.component';
import { PageNotFoundComponent } from '../app/components/page-not-found/page-not-found.component';
import { BookDetailsComponent } from '../app/components/book-details/book-details.component';
import { HomeComponent } from './components/home/components/home/home.component';
import { BooksListComponent } from './components/home/components/books-list/books-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign-In'},
  { path: 'sign-In', component: UserSignInComponent},
  { path: 'sign-Up', component: UserSignUpComponent},
  {path: 'book-list', component: HomeComponent},
  { path: 'create-book', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'book-list/:_id', component: BookDetailsComponent},
  { path: 'book-list/:_id/edit', component: BooksEditComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: PreloadAllModules }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
