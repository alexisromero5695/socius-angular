import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuFixedComponent } from '../commons/menu-fixed/menu-fixed.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuFixedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    MenuFixedComponent
  ]
})
export class SharedModule { }
