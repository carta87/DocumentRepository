import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLibreriasComponent } from './main-librerias/main-librerias.component';
import { GormComponent } from './gorm/gorm.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { SwaggerComponent } from './swagger/swagger.component';
import { GitComponent } from './git/git.component';
import { PrimefacesComponent } from './primefaces/primefaces.component';

const routes : Routes = [
    {
      path: '',
      component: MainLibreriasComponent
    },
    {
      path: 'gorm',
      component: GormComponent
    },
    {
      path: 'bootstrap',
      component: BootstrapComponent
    },
    {
      path: 'swagger',
      component: SwaggerComponent
    },
    {
      path: 'git y heroku',
      component: GitComponent
    },
    {
      path: 'primeFces',
      component: PrimefacesComponent
    }
]

@NgModule({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})

export class LibreriasRoutingModule { }
