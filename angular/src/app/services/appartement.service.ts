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

  searchwithjoin(id : number){
    let url = "http://localhost:8081/appartementdetail?";
    console.log ("ID with join Service aufgerufen");
    console.log (id);
    url = url +"id=" +id;
    return this.http.get(url);

  }

  searchbyID(id : number){
    let url = "http://localhost:8081/appartement?";
    console.log ("ID Service aufgerufen");
    console.log (id);
    url = url +"id=" +id;
    return this.http.get(url);
  }

  uploadAppartement(objecttype: String, rooms: Number, squaremeter : Number, price : Number, extra : String, 
  plz: Number, Ort : String, contact : Object ){
    let url ="http://localhost:8081/postappartement" 
    let body = {
      "objecttype" : objecttype,
      "rooms" : rooms,
      "squaremeter" : squaremeter,
      "price" : price,
      "extra" : extra,
      "plz" : plz,
      "ort" : Ort,
      "contact" : Object,
    }
    return this.http.post(url,body,{withCredentials: true});

  }

}
