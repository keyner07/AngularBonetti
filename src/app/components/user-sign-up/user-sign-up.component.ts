import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { User } from '../../model/user';
import { UserService } from '../../core/service/user/user.service';
// import { AlertService, UserService, AuthenticationService } from '@/_services';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
  public usuario: User = {
    id: '11',
    name: '',
    password: '',
    email: ''
  };
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.usuario);
    this.userService.createUser(this.usuario)
    .subscribe(user => {
      this.onAlert(user);
      this.logged(user);
    });
  }

  onAlert(data: any) {
    alert(data.message);
  }

  logged(data: any) {
    if( data.message === 'Correct') {
      this.router.navigate(['book-list']);
    }
  }

}
