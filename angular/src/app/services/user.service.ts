import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor( private http: Http) { }


  getAuthenticatedUser(){
  let url ="http://localhost:8081/isloggedin";
  return this.http.get(url, {withCredentials: true});
  }

  logout(){
  let url ="http://localhost:8081/logout" 
  return this.http.post(url,"",{withCredentials: true});
  }

}


