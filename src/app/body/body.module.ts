import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaTareasComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    FormsModule
  ]
})
export class BodyModule { }
