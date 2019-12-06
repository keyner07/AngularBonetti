import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../model/user';
import { UserService } from '../../core/service/user/user.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
  public usuario: User = {
    id: '11',
    name: '',
    password: '',
    email: ''
  };
  constructor( private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.loginUser(this.usuario)
    .subscribe(user => {
      this.onAlert(user);
      this.logged(user);
    },
    error => console.log(error)
    );
  }

  onAlert(data: any) {
    alert(data.message);
  }

  logged(data: any) {
    if(data.message === 'Accedio correctamente'){
      this.router.navigate(['book-list']);
    }
    // alert('Email o contrase;a incorrecta');
  }

}
