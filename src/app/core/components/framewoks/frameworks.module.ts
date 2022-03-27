import { NgModule } from '@angular/core';

import { MainFrameworksComponent } from './main-frameworks/main-frameworks.component';
import { AngularComponent } from './angular/angular.component';
import { ReactComponent } from './react/react.component';
import { VueJsComponent } from './vue-js/vue-js.component';
import { JavaServerFacesComponent } from './java-server-faces/java-server-faces.component';

import { CommonModule } from '@angular/common';
import { FrameworksRoutingModule } from './frameworks-routing.module';
import { JavaSwingComponent } from './java-swing/java-swing.component';
import { JavaSpringComponent } from './java-spring/java-spring.component';
import { JaxbComponent } from './jaxb/jaxb.component';

@NgModule({
    declarations:[
        MainFrameworksComponent,
        AngularComponent,
        ReactComponent,
        VueJsComponent,
        JavaServerFacesComponent,
        JavaSwingComponent,
        JavaSpringComponent,
        JaxbComponent
    ],
    imports:[
        CommonModule,
        FrameworksRoutingModule
    ],
    exports:[]
})

export class FrameworksModule { }
