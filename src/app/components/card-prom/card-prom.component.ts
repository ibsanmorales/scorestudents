import { Component, Input, OnInit } from '@angular/core';
import { faArrowUp, faArrowDown, faClipboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-prom',
  templateUrl: './card-prom.component.html',
  styleUrls: ['./card-prom.component.css']
})
export class CardPromComponent implements OnInit {
  @Input() dataCard:any={};
/*  iconCard = faClipboard;
  nombreCard = 'Carlos loret';
  fontColorCard = 'red';
  recordCard = 95.555; */
  constructor() { }

  ngOnInit(): void {
  }

}
