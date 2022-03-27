import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainTransversalesComponent } from './components/main-transversales/main-transversales.component';

import { JavaComponent } from './components/java/java.component';
import { CsharpComponent } from './components/csharp/csharp.component';
import { VbComponent } from './components/vb/vb.component';
import { FsharpComponent } from './components/fsharp/fsharp.component';

import { TransversalesRoutingModule } from './transversales-routing.module';

@NgModule({
  declarations: [
    MainTransversalesComponent,
    JavaComponent,
    VbComponent,
    CsharpComponent,
    FsharpComponent
  ],
  imports: [
    CommonModule,
    TransversalesRoutingModule
  ]
})
export class TransversalesModule { }
