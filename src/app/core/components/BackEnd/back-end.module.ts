import { NgModule } from '@angular/core';

import { CsharpComponent } from './csharp/csharp.component';
import { GoComponent } from './go/go.component';
import { PhpComponent } from './php/php.component';
import { MainBackEndComponent } from './main-back-end/main-back-end.component';
import { TypecsriptComponent } from './typecsript/typecsript.component';
import { NodejsComponent } from './nodejs/nodejs.component';

import { CommonModule } from '@angular/common';
import { BackEndRoutingModule } from './back-end-routing.module';


@NgModule({
    declarations:[
        CsharpComponent,
        GoComponent,
        PhpComponent,
        MainBackEndComponent,
        TypecsriptComponent,
        NodejsComponent
    ],
    imports:[
        CommonModule,
        BackEndRoutingModule
    ],
    exports:[]
})

export class BackEndModule { }
