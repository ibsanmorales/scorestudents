import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/models/studet';
import { ExcelService } from '../../services/excel.service'
import { HelperSummary }  from '../../helpers/helperSummary';

@Component({
  selector: 'app-body-cal',
  templateUrl: './body-cal.component.html',
  styleUrls: ['./body-cal.component.css']
})
export class BodyCalComponent implements OnInit {
  dataexcel: student[]= [];
  dataKeys: any[]= [];

  view_max:any ={}; 
  view_min:any ={};
  view_avge_general:any={}; 

  numberTravel:string='';
  isInteger:boolean = true;

  constructor(private excelData:ExcelService, private summary:HelperSummary) { }

  ngOnInit(): void {

  }
  handleFileInput(event:any) {
    const data = event.target.files[0];
    this.excelData.readExcel(data);
  };

  chargeinfo(){
    this.validationData();
    this.view_max = this.summary.getmayor(this.dataexcel);
    this.view_avge_general = this.summary.getpromedio(this.dataexcel);
    this.view_min = this.summary.getmin(this.dataexcel);
  } 
    //validation error file parse
  validationData(){
    if(this.excelData.jsonfile==null){
    console.log("Algo a pasado, porfavor verifica el archivo o su contenido");
    }else{
      this.dataexcel = this.excelData.jsonfile;
      this.dataKeys= this.summary.makeArrayClaves(this.dataexcel,0);
      console.log(this.dataKeys);
    }
  
    }
    generate(){
      this.isInteger = this.validateNumber(this.numberTravel);
      if(this.isInteger){
        this.dataKeys= this.summary.makeArrayClaves(this.dataexcel,Number(this.numberTravel));
        console.log(this.dataKeys);
      }
      else{
        this.isInteger = false;
        this.numberTravel = '0';
      }
    }

    validateNumber(num:string) {
      const regularExpression = /^\d+$/;
      return regularExpression.test(num);
     }

  


}
