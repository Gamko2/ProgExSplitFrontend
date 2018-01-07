import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Appartement } from '../../appartement';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() appartements : Appartement[];
}
