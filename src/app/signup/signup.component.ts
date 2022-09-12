import { Component, OnInit } from '@angular/core';
import { usersService } from '../services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    passWord: new FormControl('', Validators.required),
    passWordConfirm: new FormControl('', Validators.required),
  });

  constructor(private usersservice: usersService, private router: Router) {}

  ngOnInit(): void {}

  signup(data: any): void {
    let user = new User();
    user.password = data.passWord;
    user.username = data.userName;
    user.roles = ['ROLE_USER'];

    this.usersservice.Singup(user).subscribe({
      next: (data) => {
        this.router.navigateByUrl('/');
        console.log(data);
      },
      error: (error) => {
        alert("error")
      }
    });
  }
}
