import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainArquitecturasComponent } from './main-arquitecturas/main-arquitecturas.component';
import { SoapComponent } from './soap/soap.component';
import { RestComponent } from './rest/rest.component';
import { MavenComponent } from './maven/maven.component';
import { GradleComponent } from './gradle/gradle.component';

const routes : Routes = [
    {
        path: '',
        component: MainArquitecturasComponent
    },
    {
        path: 'soap',
        component: SoapComponent
    },
    {
        path: 'rest',
        component: RestComponent
    },
    {
        path: 'maven',
        component: MavenComponent
    },
    {
        path: 'gradle',
        component: GradleComponent
    }
]

@NgModule({
    imports:[ RouterModule.forChild(routes)],
    exports:[ RouterModule ]
})

export class ArquitecturaRoutingModule { }