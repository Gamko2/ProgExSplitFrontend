import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Globals } from "../.././globalvariables";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { ROUTES } from '@angular/router';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor( @Inject(Http) private http: Http, private router: Router, private userService: UserService) {
  }

  responsetype: String;
  responsemessage: String;


  login(username: String, password: String) {

    console.log(username, password);
    let url = "http://localhost:8081/login";
    const body = {
      username: username,
      password: password,

    }
    this.http.post(url, body,{withCredentials: true}).subscribe((searchResult) => {
      console.log(searchResult);
      let tmp = JSON.parse(searchResult["_body"])
      if (tmp.code === 200) {
        this.responsetype = "success";
        this.userService.getAuthenticatedUser().subscribe((user) => {
          console.log(user["_body"]);
          Globals.authenticatedUser = JSON.parse(user["_body"])
          console.log(Globals.authenticatedUser.username);
        });

        
        this.router.navigate(["/dashboard"]);

      }
      else {
        this.responsetype = "error";
      }
      if (tmp.success) {
        this.responsemessage = tmp.success;
      }
      else {
        this.responsemessage = tmp.failed;
      }

    });



  }
  ngOnInit() {
  }
}
