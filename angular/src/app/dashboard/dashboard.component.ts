import { Component, OnInit } from '@angular/core';
import { Globals } from "../globalvariables";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public global = Globals;
  constructor() { }

  ngOnInit() {
  }

}
