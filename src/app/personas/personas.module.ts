import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';

import { ListadoComponent } from './pages/listado/listado.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    SharedModule
  ]
})
export class PersonasModule { }
