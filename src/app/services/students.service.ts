import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from  'rxjs/Observable';
import {Aluno} from '../models/aluno';
import { Http, RequestOptions } from '@angular/http';
import { Disciplina } from '../models/disciplina';
import { Boletim } from '../models/boletim';

@Injectable()
export class StudentsService {

  private serviceUrl = 'http://localhost:4200/api'

  myAlunosId: Array<Number>=[];
  myDiscId: Array<Number>=[];

  constructor(private http: HttpClient) { }

  getStudent(anoRequerido: string): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.serviceUrl+"/alunos/"+anoRequerido);
  }

  getDisciplinas(anoRequerido: string): Observable<Disciplina[]>{
    return this.http.get<Disciplina[]>(this.serviceUrl+"/disciplinas/"+anoRequerido);
  }

  saveToBoletim(alunosId:any,discId:any){
    this.myAlunosId = alunosId;
    this.myDiscId = discId;
  }

  getBoletim(){
    var stdIdString = this.myAlunosId.join(',');
    var discIdString = this.myDiscId.join(',');
    stdIdString = '('+stdIdString+')';
    discIdString = '('+discIdString+')';
    let params = new HttpParams();
    params.append('stdIds','(1,2)');
    params.append('discIds','(1,2)');
    return this.http.get<Boletim[]>(this.serviceUrl+"/boletim?stdIds="+stdIdString+"&discIds="+discIdString);
  }
 
}
