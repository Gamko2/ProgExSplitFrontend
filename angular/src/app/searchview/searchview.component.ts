import { Component, OnInit, Input } from '@angular/core';
import { AppartementService } from '../services/appartement.service';
import {Http, Response} from "@angular/http";
import { Appartement } from '../appartement';
import { Globals } from '../globalvariables';


@Component({
  selector: 'app-searchview',
  templateUrl: './searchview.component.html',
  styleUrls: ['./searchview.component.css']
})
export class SearchviewComponent implements OnInit {

  public global = Globals;
  constructor(private appartementService : AppartementService) { }

  
  appartements : Appartement[];
  



  ngOnInit() {
  }

  public loadAppartements = (searchword : String, ort : String) => {
    console.log("Load Appartements called");
    this.appartementService.searchAppartement(searchword,ort).subscribe((searchResult) =>{
      console.log(searchResult);
     this.appartements = JSON.parse(searchResult["_body"]);
    });
  
  }

  



}
