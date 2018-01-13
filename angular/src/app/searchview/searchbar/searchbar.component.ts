import { Component, OnInit, Input } from '@angular/core';
import { AppartementService } from '../../services/appartement.service';
import { Globals } from "../.././globalvariables";

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }
  ort: String = "";
  searchwords: String = "";
  @Input() callback: Function;

  test() {
    console.log("Test succeeded")
  }


}
