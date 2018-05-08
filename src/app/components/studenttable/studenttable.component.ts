import { Component, OnInit, ViewChild,Input } from '@angular/core';
import {StudentsService} from '../../services/students.service';
import {Observable} from 'rxjs/Observable';
import {DataSource, SelectionModel} from '@angular/cdk/collections';
import {Aluno} from '../../models/aluno';
import {MatTableDataSource, MatSort, MatTable} from '@angular/material';
@Component({
  selector: 'studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.css']
})


export class StudenttableComponent implements OnInit {
  @Input() anoRequerido: string;
  dataSource;
  columnsToDisplay = ['select','nome','matricula','pontos','ano_formacao'];
  @ViewChild(MatSort) sort: MatSort;
  selection = new SelectionModel<Element>(true, []);

  constructor(private studentService: StudentsService) {}
  
  ngOnInit() {}

  ngOnChanges(){
    this.studentService.getStudent(this.anoRequerido).subscribe(results => {
      if(!results){
         return;
      }
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;

    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
}
