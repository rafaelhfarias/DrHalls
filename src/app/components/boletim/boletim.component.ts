import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Aluno } from '../../models/aluno';
import { MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Disciplina } from '../../models/disciplina';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Chart } from 'chart.js';
import { from } from 'rxjs/observable/from';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

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

  chartsData: any[];
  Charts: Chart[];
  canvas: any;
  chart: any;
  ctx: any;

  ndisc: any;
  DiscArray: any;
  items: any[];
  ngOnInit() {
    this.chartsData = new Array<any>();
    this.Charts = new Array<Chart>();
    this.studentService.getBoletim().subscribe(results => {
      if (!results || results.length == 0) {
        return;
      }
      console.log(results);
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.DiscArray = results.map(res => res.Nome_Disciplina).filter(function (elem, index, self) { return index === self.indexOf(elem); });
      this.ndisc = this.DiscArray.length;
      this.items = Array.from(Array(this.ndisc).keys());
    });
  }


  ngAfterViewInit() {
    console.log("INICIOU!!!")
    this.studentService.getBoletim().subscribe(results => {
      if(!results){
        return ;
      }
      const source = from(results);
      const example = source.pipe(groupBy(boletim => boletim.Nome_Disciplina), mergeMap(group => group.pipe(toArray())));

      const subscribe = example.subscribe(val => {
        let nome_alunos = val.map(res => res.Nome_Aluno);
        let notas_ve = val.map(res => res.ve);
        let notas_vc = val.map(res => res.vc);
        let notas_vf = val.map(res => res.vf);
        let er_escrita = val.map(res => res.er_escrita);
        let er_oral = val.map(res => res.er_oral);

        let chartData = {
          type: 'bar',
          data: {
            labels: nome_alunos,
            datasets: [
              { label: 'VE', data: notas_ve, borderColor: '#3cba9f', backgroundColor: '#3cba9f' },
              { label: 'VC', data: notas_vc, borderColor: '#ffcc00', backgroundColor: '#ffcc00' },
              { label: 'VF', data: notas_vf, borderColor: '#22ccaa', backgroundColor: '#22ccaa' },
              { label: 'ER Escrita', data: er_escrita, borderColor: '#43a2bf', backgroundColor: '#43a2bf', hidden: true },
              { label: 'ER Oral', data: er_oral, borderColor: '#ffaa33', backgroundColor: '#ffaa33', hidden: true }
            ]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }],
              xAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        };
        this.chartsData.push(chartData);
      });
      for (let item in this.items) {
        this.canvas = document.getElementById(item.toString());
        this.ctx = this.canvas.getContext('2d');
        this.Charts.push(new Chart(this.ctx, this.chartsData[item]));
      }
      /*
      let nome_alunos = results.map(res => res.Nome_Aluno);
      let notas_ve = results.map(res => res.ve);
      let notas_vc = results.map(res => res.vc);
      let notas_vf = results.map(res => res.vf);
      let er_escrita = results.map(res => res.er_escrita);
      let er_oral = results.map(res => res.er_oral);
      this.canvas = document.getElementById('myChart');
      this.ctx = this.canvas.getContext('2d');
      this.chart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: nome_alunos,
          datasets: [
            { label: 'VE', data: notas_ve, borderColor: '#3cba9f', backgroundColor: '#3cba9f' },
            { label: 'VC', data: notas_vc, borderColor: '#ffcc00', backgroundColor: '#ffcc00' },
            { label: 'VF', data: notas_vf, borderColor: '#22ccaa', backgroundColor: '#22ccaa' },
            { label: 'ER Escrita', data: er_escrita, borderColor: '#43a2bf', backgroundColor: '#43a2bf' },
            { label: 'ER Oral', data: er_oral, borderColor: '#ffaa33', backgroundColor: '#ffaa33' }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true
              }
            }] 
          }
        }
      })*/

    })

  }
}
