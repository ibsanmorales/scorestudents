import { Injectable } from "@angular/core";
import { student } from "../models/studet";
import { faArrowUp, faArrowDown, faClipboard } from '@fortawesome/free-solid-svg-icons';
@Injectable({
    providedIn: 'root'
  })
export class HelperSummary {
 //GET MAX STUDENT OF STUDENTS
  getmayor(arr:student[]):object{
    var max = 0;
    var i =0;
    var nombre=""
     arr.forEach((element, index) => {
     if(max < element["Calificacion"]){
        i= index;
        max=element["Calificacion"];
        nombre=element["Nombres"]+" "+element["Apellido Paterno"]+" "+element["Apellido Materno"];
      }
    });
     return {points:max,id_student:i,nombre:nombre,icono:faArrowUp,color:'green'}
  }
 //GET MIN STUDENT OF STUDENTS
 getmin(arr:student[]):object{
    var min = 10;
    var i =0;
    var nombre=""
    arr.forEach((element, index) => {
     if(min > element["Calificacion"]){
        i= index;
        min=element["Calificacion"];
        nombre=element["Nombres"]+" "+element["Apellido Paterno"]+" "+element["Apellido Materno"];
      }
    });
    return {points:min,id_student:i,nombre:nombre,icono:faArrowDown,color:'red'}
  }

//GENERAL AVERAGE
 getpromedio(arr:student[]):object{
    var sum = 0;
    var avge= 0;
    arr.forEach((element) => {
            sum+=element["Calificacion"];
        });
    avge=sum/arr.length ;
    return {points:avge,id_student:100,nombre:'Promedio General',icono:faClipboard,color:'azul'}
    }
    //GET ARRAY OF KEYS
    makeArrayClaves(arr:student[], travel:number){
      let keysStudents : any[] = [];
      arr.forEach((a,index)=>{
        let keystudent = this.generateKeybyStudent(a,travel)
        keysStudents.push({keyst:keystudent,Nombre:a.Nombres+' '+a["Apellido Paterno"]+' '+a["Apellido Materno"]})
      });
      return keysStudents;
    }
    //CONVERT BIRTHDAT TO YEAROLD
    yearsOldCalculato(dateBrith:string){
      let msDiff= 0;
      const datebirthday = new Date(dateBrith.replace(/(\d+[/])(\d+[/])/, '$2$1'));
      const  today = new Date();

      msDiff = today.getTime() - datebirthday.getTime();
      const age = Math.floor(msDiff / (365.25*24*60*60*1000))
      return age;
    }
    //GET LETTER CALCULATE 
    travelLetterDos(letter:string, num:number){
      let z = num;
      let i = 0;
      let travelLetter='';
      let findedLetter = false;
      let letterUP =letter.toLocaleUpperCase();
      const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
      i=abc.length-1;
     while (z !== 0){
      if(findedLetter == false){
          if(letterUP == abc[i]){
            findedLetter=true;
          }
        }else{
          z--;
          if(z==0){
            travelLetter=abc[i];
          }
        }
        if(i == 0) i= abc.length;
        i--;
      }

      return travelLetter;
    }
    //GER KEY FOR STUDENT
    generateKeybyStudent(st:student, num:number){
      let keySt='';
      //let part1 = st["Nombres"].replace(' ','').slice(0, 2);
      let part1 = st["Nombres"].slice(0, 2);
      let part2 = st["Apellido Materno"].slice(-2);
      let keyNombre = part1+part2;
      if(num == 0){
        keySt= keyNombre.toLocaleUpperCase();
      } else{
        keyNombre.split('').forEach((e)=>{
          keySt= keySt + this.travelLetterDos(e,num);
        });
      }
      let years = this.yearsOldCalculato(st["Fecha de Nacimiento"]);
      keySt= keySt + years.toString();
      return keySt
    }
}
