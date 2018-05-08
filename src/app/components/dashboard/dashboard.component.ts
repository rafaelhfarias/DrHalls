import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'; 
import { Observable } from 'rxjs/Observable';
import { Aluno } from '../../models/aluno';
import { HttpClientModule } from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { StudenttableComponent } from '../studenttable/studenttable.component';
import { DisctableComponent } from '../disctable/disctable.component';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent implements OnInit {
  ano = "";
  
  @ViewChild(StudenttableComponent) stdComponent: StudenttableComponent;
  @ViewChild(DisctableComponent) discComponent: DisctableComponent;

  constructor(private user:UserService, private http:HttpClient, private router: Router, private studentService: StudentsService) { 
    
  }
  
  ngOnInit() {
    var year = "Terceiro Ano";
  //  this.GetAllStudents();
    
  }

  TerceiroAno = function() {
    this.year = "Terceiro Ano";
    this.ano = "3" ;
    //this.FilterStudentByYear();
  }
  
  QuartoAno = function() {
    this.year = "Quarto Ano";
    this.ano = "4";
    //this.FilterStudentByYear();
  }

  QuintoAno = function() {
    this.year = "Quinto Ano";
    this.ano = "5";
  //  this.FilterStudentByYear();
  }

  ShowNotas = function(){
    this.alSelected = this.stdComponent.selection.selected;
    this.discSelected = this.discComponent.selection.selected;
    this.alSelected = this.alSelected.map(function(obj){ return obj.id});
    this.discSelected = this.discSelected.map(function(obj){ return obj.id});
    console.log(this.alSelected);
    console.log(this.discSelected);
    this.studentService.saveToBoletim(this.alSelected,this.discSelected);

    this.router.navigate(['boletim']);
  }



}
