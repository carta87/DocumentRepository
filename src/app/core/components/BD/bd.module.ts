import { NgModule } from '@angular/core';

import { PostgresqlComponent } from './postgresql/postgresql.component';
import { MysqlComponent } from './mysql/mysql.component';
import { MainBdComponent } from './main-bd/main-bd.component';
import { MongoDBComponent } from './mongo-db/mongo-db.component';
import { SqlserverComponent } from './sqlserver/sqlserver.component';
import { OracleComponent } from './oracle/oracle.component';

import { CommonModule } from '@angular/common';
import { BdRoutingModule } from './sql-routing.module';



@NgModule({
  declarations: [
    PostgresqlComponent,
    MysqlComponent,
    MainBdComponent,
    MongoDBComponent,
    SqlserverComponent,
    OracleComponent
  ],
  imports: [
    CommonModule,
    BdRoutingModule
  ]
})
export class BdModule { }
