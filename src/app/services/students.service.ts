import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from  'rxjs/Observable';
import {Aluno} from '../models/aluno';
import { Http } from '@angular/http';

@Injectable()
export class StudentsService {

  private serviceUrl = 'http://localhost:4200/api/dados'

  constructor(private http: HttpClient) { }

  getStudent(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.serviceUrl);
  }


 
}
