import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class AppartementService {

  constructor(
    private http: Http
  ) { }

  searchAppartement(objecttype: String, ort: String) {
    let url = "http://localhost:8081/appartement?";
    console.log("Service aufgerufen");
    console.log(ort, objecttype);
    if (objecttype != "") {
      url = url + "objecttype=" + objecttype +"&";
    }
    if (ort != "") {
      url = url + "ort=" + ort +"&";
    }
    return this.http.get(url);
  }

  searchbyID(id : number){
    let url = "http://localhost:8081/appartement?";
    console.log ("ID Service aufgerufen");
    console.log (id);
    url = url +"id=" +id;
    return this.http.get(url);
  }

}
