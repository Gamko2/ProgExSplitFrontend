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
import { AppartementdetailComponent } from './searchview/searchresult/appartementdetail/appartementdetail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    SearchviewComponent,
    SearchbarComponent,
    SearchresultComponent,
    AppartementdetailComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppartementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
