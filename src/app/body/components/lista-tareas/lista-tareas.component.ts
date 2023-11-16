import { Component } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent {

  tareas: Task[]=[];

  ngOnInit(): void{
    this.tareas = localStorage.getItem("tareas") ?JSON.parse(localStorage.getItem("tareas")!) : []
  }

  onSubmit(formValue: Task){
    this.tareas.push(formValue);
    localStorage.setItem("tareas", JSON.stringify (this.tareas))
    console.log(this.tareas)
  }
  onRemove(indice: number){
    this.tareas.splice(indice,1)
    localStorage.setItem("tareas", JSON.stringify(this.tareas))
  }

}
