import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainBackEndComponent } from './main-back-end/main-back-end.component';
import { GoComponent } from './go/go.component';
import { CsharpComponent } from './csharp/csharp.component';
import { PhpComponent } from './php/php.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { TypecsriptComponent } from './typecsript/typecsript.component';

const routes: Routes = [
    {
        path: '',
        component: MainBackEndComponent
    },
    {
        path: 'Go',
        component: GoComponent
    },
    {
        path: 'Csharp',
        component: CsharpComponent
    },
    {
        path: 'Php',
        component: PhpComponent
    },
    {
        path: 'Nodejs',
        component: NodejsComponent
    },
    {
        path: 'TypeScript',
        component: TypecsriptComponent
    }
]

@NgModule({
    imports:[ RouterModule.forChild(routes)],
    exports:[ RouterModule ]
})

export class BackEndRoutingModule {}
