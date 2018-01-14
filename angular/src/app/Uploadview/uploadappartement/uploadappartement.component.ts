import { Component, OnInit } from '@angular/core';
import { AppartementService } from '../../services/appartement.service';
import { Router } from '@angular/router/';
import { Globals } from "../.././globalvariables";

@Component({
  selector: 'app-uploadappartement',
  templateUrl: './uploadappartement.component.html',
  styleUrls: ['./uploadappartement.component.css']
})
export class UploadappartementComponent implements OnInit {
  objecttype: String = "";
  rooms: String = "";
  squaremeter: String = "";
  price: String = "";
  extra: String = "";
  plz: String = "";
  ort: String = "";
  contact: Object = undefined;
  responsetype: String;
  responsemessage: String;
  public global = Globals;


  constructor(private appartementService: AppartementService, private router: Router) { }

  uploadAppartements() {
    console.log("upload appartement called");
    this.appartementService.uploadAppartement(this.objecttype, +this.rooms, +this.squaremeter,
      +this.price, this.extra, +this.plz, this.ort, this.contact).subscribe((result) => {
        console.log(result);
        let tmp = JSON.parse(result["_body"])
        if (tmp.code === 200) {
          this.responsetype = "success";
          this.responsemessage = tmp.success;
          this.router.navigate(["/dashboard"]);
        }
        else {
          this.responsetype = "failed";
          this.responsemessage = tmp.failed;
        }

      }




      )

  }


  ngOnInit() {
    
  }



}
