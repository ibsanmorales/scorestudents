import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { student } from '../models/studet';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  private arrayBuffer:any;
  workbook:any;
  jsonfile:student[] | undefined;

  constructor() {
    this.arrayBuffer=[];
   }
   //READ AND CONVERT XSLX FILES TO JSON
   readExcel(file:File){
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      try
      {
        this.workbook = XLSX.read(bstr, {type:"binary"});
        var first_sheet_name = this.workbook.SheetNames[0];
        var worksheet = this.workbook.Sheets[first_sheet_name];
        //console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
        this.jsonfile= XLSX.utils.sheet_to_json(worksheet,{raw:true})
        console.log(this.jsonfile)
      }
      catch
      {
        fileReader.abort();
      }
    }
   fileReader.readAsArrayBuffer(file);            
  }
}
