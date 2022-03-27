import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainFrameworksComponent } from './main-frameworks/main-frameworks.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { VueJsComponent } from './vue-js/vue-js.component';
import { JavaServerFacesComponent } from './java-server-faces/java-server-faces.component';
import { JavaSwingComponent } from './java-swing/java-swing.component';
import { JavaSpringComponent } from './java-spring/java-spring.component';
import { JaxbComponent } from './jaxb/jaxb.component';

const routes : Routes =[
    {
        path: '',
        component: MainFrameworksComponent
    },
    {
        path: 'angular',
        component: AngularComponent
    },
    {
        path: 'react',
        component: ReactComponent
    },
    {
        path: 'vue-js',
        component: VueJsComponent
    },
    {
      path: 'JavaServerFaces',
      component: JavaServerFacesComponent
    },
    {
      path: 'JavaSwing',
      component: JavaSwingComponent
    },
    {
        path: 'JavaSpring',
        component: JavaSpringComponent
    },
    {
      path: 'Jaxb',
      component: JaxbComponent
  }
]

@NgModule({
    declarations:[],
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class FrameworksRoutingModule { }
