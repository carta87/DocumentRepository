import { Component } from '@angular/core';

@Component({
  selector: 'app-java-server-faces',
  templateUrl: './java-server-faces.component.html',
  styleUrls: ['./java-server-faces.component.scss']
})
export class JavaServerFacesComponent {

  busqueda: number = 0;

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
