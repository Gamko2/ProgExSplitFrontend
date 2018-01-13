import { Component, OnInit, Input } from '@angular/core'; 
import { Globals } from "../.././globalvariables";
 
@Component({ 
  selector: 'app-messagebox', 
  templateUrl: './messagebox.component.html', 
  styleUrls: ['./messagebox.component.css'] 
}) 
export class MessageboxComponent implements OnInit { 
 
  public global = Globals;
  constructor() { } 
 
   
  
  @Input() type : String; 
  @Input() message : String; 
 
 
 
   
 
ngOnInit() { 
} 
 
 
} 