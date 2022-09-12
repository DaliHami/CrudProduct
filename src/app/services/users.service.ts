import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable()
export class usersService
{

  endPoint = 'http://localhost:8000/api/users.json';
  constructor(private httpclient:HttpClient){

  }

  CheckUserExist(userName:string,passWord:string): Observable<any> {
    let params1 = new HttpParams().set('username',userName).set('password',passWord);
    return this.httpclient.get(this.endPoint,{params:params1});

  }

Singup(user:User):Observable<any> {

return this.httpclient.post(this.endPoint,user);
}

}

