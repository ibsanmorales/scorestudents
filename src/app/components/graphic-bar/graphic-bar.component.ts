import { Component, Input, OnInit,SimpleChanges} from '@angular/core';
import { student } from 'src/app/models/studet';

import { ChartType } from 'chart.js';
import { Color } from 'ng2-charts';


@Component({
  selector: 'app-graphic-bar',
  templateUrl: './graphic-bar.component.html',
  styleUrls: ['./graphic-bar.component.css']
})
export class GraphicBarComponent  {
  @Input() dataStudent:student[]=[];
  //Bar chart graphic
  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true ,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0)",
        }
        }
      ],
      xAxes: [{
        gridLines: {
            color: "rgba(0, 0, 0, 0)",
        }
      }],
    },
    legend: {
      display: false
    }
  }; 
  public barChartColors: Color[] = [
    { backgroundColor: 'rgba(63, 123, 191, 0.8)' },
  ]

  public barChartLabels:string[] = [];
  public barChartType:ChartType = 'bar';
  public barChartLegend:boolean = true;
  public barChartData:any[] = [{data:[],label:""}
];



  constructor() {

   }
   

  ngOnChanges(changes: SimpleChanges) {
    let calificanes = this.dataStudent.map(a => a["Calificacion"]);
    let nombres = this.dataStudent.map(a => a["Nombres"]);
         
    this.barChartData[0].data=calificanes;
    this.barChartData[0].label="Alumno"
    this.barChartLabels=nombres;
  }


}
