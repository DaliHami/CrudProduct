import { Component, OnInit } from '@angular/core';
import { usersService } from '../services/users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
    userName: new FormControl('',Validators.required),
    passWord: new FormControl('',Validators.required),
  });

  constructor(private usersservice :usersService, private router: Router ) {}

  ngOnInit(): void {


  }
 login(data:any) : void {
  this.usersservice.CheckUserExist(data.userName,data.passWord).subscribe
  (
    data=>
    {
      console.log(data+"////////////////////////77")
     if (!data.length)
     alert("user does not exists");
     else
     {
      console.log(data)
      alert ("welcome "+data[0].username)
      this.router.navigateByUrl('/home');
     }

    }

  )

 }
}
