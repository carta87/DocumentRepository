import { Component } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.scss']
})
export class CssComponent {

  public abrellave: string;
  public cierrallave: string; 
  public abreDiamante: string;
  public cierraDiamante: string;
  public abreParentesis: string;
  public cierraParentesis: string;
  public abreCuadro: string;
  public cierraCuadro: string;

  constructor() {
    this.abrellave= "{";
    this.cierrallave="}";
    this.abreDiamante= "<";
    this.cierraDiamante= ">";
    this.abreParentesis= "(";
    this.cierraParentesis= ")";
    this.abreCuadro= "[";
    this.cierraCuadro= "]";
  }
}
