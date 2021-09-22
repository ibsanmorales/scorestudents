import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
 //Get Weather by lon and lat
 getCurrentWeather(lon: string, lat:string) {
    return this.http.get(`${environment.apiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${environment.apiKey}`)
 }
 //Get Weather by description
 getCurrentWeatherByQuery(q:string){
   return this.http.get(`${environment.apiUrl}?q=${q}&units=metric&appid=${environment.apiKey}` )
 } 
}
