import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-weather',
  templateUrl: './card-weather.component.html',
  styleUrls: ['./card-weather.component.css']
})
export class CardWeatherComponent implements OnInit {
  @Input() weatherData:any={};

  constructor() { }

  ngOnInit(): void {
   
  }

}
