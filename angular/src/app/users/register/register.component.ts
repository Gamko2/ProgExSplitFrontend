import { Component, OnInit, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { httpFactory } from '@angular/http/src/http_module';
import { Http } from '@angular/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( @Inject(Http) private http: Http) { }

  ngOnInit() {
  }
  email: string ;
  password: string;
  username: string ;



  register(username: string, password: string, email: string) {
    console.log(email,password,username);
    let url = "http://localhost:8081/register";
    const body = {
      username: username,
      password: password,
      email: email
    }
    console.log(body);
    this.http.post(url, body).subscribe()
      
  }


}
