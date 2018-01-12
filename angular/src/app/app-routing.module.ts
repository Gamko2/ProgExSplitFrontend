import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchbarComponent } from './searchview/searchbar/searchbar.component';
import { SearchviewComponent } from './searchview/searchview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppartementdetailComponent } from './searchview/searchresult/appartementdetail/appartementdetail.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { UploadappartementComponent } from './Uploadview/uploadappartement/uploadappartement.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'search', component : SearchviewComponent},
  { path: 'dashboard', component: DashboardComponent },
  {path: 'detail/:id', component: AppartementdetailComponent},
  {path: 'register', component : RegisterComponent},
  {path: 'login', component : LoginComponent},
  {path: 'upload', component: UploadappartementComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
