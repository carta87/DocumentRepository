import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-arquitecturas',
  templateUrl: './main-arquitecturas.component.html',
  styleUrls: ['./main-arquitecturas.component.scss']
})
export class MainArquitecturasComponent implements OnInit {

  lista = ['soap','rest', 'maven', 'gradle'];
  constructor() { }

  ngOnInit(): void {
  }

}
