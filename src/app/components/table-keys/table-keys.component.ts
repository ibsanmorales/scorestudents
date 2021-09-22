import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-keys',
  templateUrl: './table-keys.component.html',
  styleUrls: ['./table-keys.component.css']
})
export class TableKeysComponent implements OnInit {
  @Input() dataKeyStds:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
