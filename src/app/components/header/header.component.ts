import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  weatherData:any=[];
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  constructor(private weatherApi:WeatherService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
      (pos:any)=> {
        const crd = pos.coords;
         this.weatherApi.getCurrentWeather(crd.longitude,crd.latitude).subscribe(res => {
          this.weatherData = res;
          console.log(this.weatherData)
        }, err => {
          console.log("Error al obtener Tiempo")
        });
      }, 
      (err:any)=> {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      },this.options);
    }

  }
  


  



