import { Component } from '@angular/core';
import { Globals } from './globalvariables';
import { OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService, private router : Router) { }

  public global = Globals;
  title = 'app';

  public ngOnInit(): void {
    this.userService.getAuthenticatedUser().subscribe((response) => {
      let responseBody = JSON.parse(response["_body"]);
      if (!responseBody.error) {
        Globals.authenticatedUser = responseBody;
      }
    });
  }

  public logout(): void {
    console.log("logoutcalled");
    this.userService.logout().subscribe((data) => {
              Globals.authenticatedUser = undefined;
              this.router.navigate(["/dashboard"]);
   })
  }

}

