import { Component, OnInit, ViewChild } from '@angular/core';
import { Aluno } from '../../models/aluno';
import { MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Disciplina } from '../../models/disciplina';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-boletim',
  templateUrl: './boletim.component.html',
  styleUrls: ['./boletim.component.css']
})
export class BoletimComponent implements OnInit {

  dataSource;
  columnsToDisplay = ['Nome_Aluno', 'Nome_Disciplina', 'Matricula', 've', 'vc', 'vf', 'er_escrita', 'er_oral'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private studentService: StudentsService) { }



  ngOnInit() {
    this.studentService.getBoletim().subscribe(results => {
      if (!results) {
        return;
      }
      console.log(results);
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
    });

  }

}
