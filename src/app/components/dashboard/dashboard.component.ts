import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'; 
import { Observable } from 'rxjs/Observable';
import { Aluno } from '../../models/aluno';
import { HttpClientModule } from '@angular/common/http'
import {HttpClient} from '@angular/common/http'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent implements OnInit {
  ano = "";

  constructor(private user:UserService, private http:HttpClient) { 
    
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


  /*
  GetAllStudents = function(){
    this.http.get('http://localhost:4200/api/dados').subscribe(data => {
      this.allStudents = data;
      console.log(this.allStudents);

    });
  }
  

  FilterStudentByYear = function(){
    this.studentByYear = this.allStudents.filter(aluno => (5 -(aluno.ano_formacao - (new Date()).getFullYear())) === this.ano);
    console.log(this.studentByYear);
  }
*/



  allStudents: Aluno[];
}
