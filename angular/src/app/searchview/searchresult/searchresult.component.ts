import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Appartement } from '../../appartement';
import { Router } from '@angular/router';
import { ROUTES } from '@angular/router';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor(private router : Router) { }

routing(appartement : Appartement){
this.router.navigate(['/detail/' + appartement.id]);
}


  ngOnInit() {
  }

  selectedAppartement : Appartement;

  

  @Input() appartements : Appartement[];
}
