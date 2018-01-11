import { Component, OnInit, Input } from '@angular/core'; 
 
@Component({ 
  selector: 'app-messagebox', 
  templateUrl: './messagebox.component.html', 
  styleUrls: ['./messagebox.component.css'] 
}) 
export class MessageboxComponent implements OnInit { 
 
  constructor() { } 
 
   
  
  @Input() type : String; 
  @Input() message : String; 
 
 
 
   
 
ngOnInit() { 
} 
 
 
} 