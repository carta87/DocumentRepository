import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { MainFrontEndComponent } from './main-front-end/main-front-end.component';

import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavaScriptComponent } from './java-script/java-script.component';

import { FrontEndRoutingModule } from './front-end-rounting.module';

@NgModule({
  declarations: [
    MainFrontEndComponent,
    HtmlComponent,
    CssComponent,
    JavaScriptComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FrontEndRoutingModule
  ]
})
export class FrontEndModule { }
