import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {AppartementService} from "./services/appartement.service";
import {HttpModule} from "@angular/http";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchviewComponent } from './searchview/searchview.component';
import { SearchbarComponent } from './searchview/searchbar/searchbar.component';
import { SearchresultComponent } from './searchview/searchresult/searchresult.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchviewComponent,
    SearchbarComponent,
    SearchresultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AppartementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
