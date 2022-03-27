import { Component } from '@angular/core';

@Component({
  selector: 'app-main-bd',
  templateUrl: './main-bd.component.html',
  styleUrls: ['./main-bd.component.scss']
})
export class MainBdComponent  {

  lista =  ["mySQL", "PostgreSQL", "SQLServer", "MongoDB", "Oracle"]
  constructor() { }
}
