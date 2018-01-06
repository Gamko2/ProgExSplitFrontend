import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AppartementService {

  constructor(
    private http:Http
  ) { }

  searchAppartement(objecttype: String){
  console.log("Service aufgerufen");
   return this.http.get("http://localhost:8081/appartement?objecttype=" + objecttype);
  }

}
