import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild} from '@angular/core';
import { AppComponent} from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule,Routes} from '@angular/router';
import { UserService } from './services/user.service';
import { AuthguardGuard } from './authguard.guard';
import {MatButtonModule, MatCheckboxModule , MatTableModule, MatSortModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import * as $ from 'jquery';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { StudenttableComponent } from './components/studenttable/studenttable.component';
import {StudentsService} from './services/students.service';
import {DisctableComponent} from './components/disctable/disctable.component';
import { BoletimComponent } from './components/boletim/boletim.component';




const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path:'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path:'boletim',
    canActivate: [AuthguardGuard],
    component: BoletimComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    StudenttableComponent,
    DisctableComponent,
    BoletimComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatTableModule, MatSortModule,
    BsDropdownModule.forRoot(),TooltipModule.forRoot(),ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [UserService,AuthguardGuard, HttpClient,StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
