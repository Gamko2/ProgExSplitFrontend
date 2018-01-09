import { Component, OnInit, Input } from '@angular/core';
import { Appartement } from '../../../appartement';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AppartementService } from '../../../services/appartement.service';


@Component({
  selector: 'app-appartementdetail',
  templateUrl: './appartementdetail.component.html',
  styleUrls: ['./appartementdetail.component.css']
})
export class AppartementdetailComponent implements OnInit {

  

  constructor(
    private route : ActivatedRoute,
    private appartementService : AppartementService,
    private locatin : Location,
  ) { }

  ngOnInit(): void {
    this.getAppartement();
  }
  @Input()  appartements : Appartement[]

  getAppartement() : void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.appartementService.searchbyID(id).subscribe((searchResult) =>{
      console.log(searchResult);
     this.appartements = JSON.parse(searchResult["_body"]);
     console.log(this.appartements);
    });
  
  }

  

}
