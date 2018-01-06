import { Component, OnInit, Input } from '@angular/core';
import { AppartementService } from '../services/appartement.service';

@Component({
  selector: 'app-searchview',
  templateUrl: './searchview.component.html',
  styleUrls: ['./searchview.component.css']
})
export class SearchviewComponent implements OnInit {

  constructor(private appartementService : AppartementService) { }

  appartements = {}



  ngOnInit() {
  }

  public loadAppartements = (searchword : String) => {
    console.log("Load Appartements called");
    this.appartementService.searchAppartement(searchword).subscribe((searchResult) => { console.log(searchResult) });
  }

  



}
