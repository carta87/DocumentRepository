import { NgModule } from '@angular/core';

import { SoapComponent } from './soap/soap.component';
import { RestComponent } from './rest/rest.component';
import { MainArquitecturasComponent } from './main-arquitecturas/main-arquitecturas.component';

import { CommonModule } from '@angular/common';
import { ArquitecturaRoutingModule } from './arquitectura-routing.module';
import { MavenComponent } from './maven/maven.component';
import { GradleComponent } from './gradle/gradle.component';

@NgModule({ 
    declarations: [
        SoapComponent,
        RestComponent,
        MainArquitecturasComponent,
        MavenComponent,
        GradleComponent
    ],
    imports:[
        CommonModule,
        ArquitecturaRoutingModule
    ],
    exports: []
})

export class ArquitecturaModule { }