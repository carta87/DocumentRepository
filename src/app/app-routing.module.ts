import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrincipalComponent } from './layout/principal/principal.component';

const routes: Routes = [
  {
    path:'',
    component: PrincipalComponent,
    children:[
      {
        path:'',
        redirectTo: 'Inicio',
        pathMatch: 'full'
      },
      {
        path:'FrontEnd',
        loadChildren: () => import ('./core/components/FrontEnd/front-end.module').then(m => m.FrontEndModule)
      },
      {
        path:'BackEnd',
        loadChildren: () => import ('./core/components/BackEnd/back-end.module').then(m => m.BackEndModule)
      },
      {
        path: 'BD',
        loadChildren: () => import('./core/components/BD/bd.module').then(m => m.BdModule)
      },
      {
        path: "Librerias",
        loadChildren: () => import ('./core/components/librerias/librerias.module').then(m => m.LibreriasModule)
      },
      {
        path: "Frameworks",
        loadChildren: () => import ('./core/components/framewoks/frameworks.module').then(m => m.FrameworksModule)
      },
      {
        path : "Arquitecturas",
        loadChildren: () => import ('./core/components/arquitectura/arquitectura.module').then(m=>m.ArquitecturaModule)
      },
      {
        path: "Transversales",
        loadChildren: () => import ('./core/components/transversales/transversales.module').then(m=>m.TransversalesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
