import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {MatButtonModule, MatCheckboxModule} from '@angular/material'; 
import { Observable } from 'rxjs/Observable';
import { Aluno } from './alunos/aluno';
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
  constructor(private user:UserService, private http:HttpClient) { 
    var ano = 3;
  }
  
  ngOnInit() {
    var year = "Terceiro Ano";
    
  }

  TerceiroAno = function() {
    this.year = "Terceiro Ano";
    this.ano = 3;
    this.RefreshAlunos();
  }
  
  QuartoAno = function() {
    this.year = "Quarto Ano";
    this.ano = 4
    this.RefreshAlunos();
  }

  QuintoAno = function() {
    this.year = "Quinto Ano";
    this.ano = 5;
    this.RefreshAlunos();
  }

  RefreshAlunos = function(){
    this.http.get('http://localhost:4200/api/alunos').subscribe(data => {
      this.alunos = data;
      this.alunos = this.alunos.filter(aluno => aluno.ano === this.ano);
      console.log(this.alunos);

    });
    
  }
  alunos: Aluno[];
}
