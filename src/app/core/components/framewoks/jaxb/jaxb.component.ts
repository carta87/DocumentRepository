import { Component } from '@angular/core';

@Component({
  selector: 'app-jaxb',
  templateUrl: './jaxb.component.html',
  styleUrls: ['./jaxb.component.scss']
})
export class JaxbComponent {

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
