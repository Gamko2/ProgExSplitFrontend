import { Component, OnInit, Input } from '@angular/core';
import { AppartementService } from '../../services/appartement.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }

  searchwords : String;
  @Input() callback : Function;

  test(){
    console.log("Test succeeded")
  }
  

}
