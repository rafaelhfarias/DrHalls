import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'disctable',
  templateUrl: './disctable.component.html',
  styleUrls: ['./disctable.component.css']
})
export class DisctableComponent implements OnInit {
  @Input() anoRequerido: string;
  dataSource;
  columnsToDisplay = ['select', 'codigo', 'nome', 'ano', 'periodo'];
  @ViewChild(MatSort) sort: MatSort;
  selection = new SelectionModel<Element>(true, []);

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.studentService.getDisciplinas(this.anoRequerido).subscribe(results => {
      if (!results) {
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
