import { Component, OnInit } from '@angular/core';
import { Task } from '../../task';
import { Router } from '@angular/router';
import { TaskService } from '../../shared-service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  task:Task;

  constructor(private _taskService:TaskService,private _rotuer:Router) { }

  ngOnInit() {
    this.task=this._taskService.getter();
  }

  processForm(){
    if (this.task.id==undefined) {
       this._taskService.createTask(this.task).subscribe((task)=>{
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    } else {
       this._taskService.updateTask(this.task).subscribe((task)=>{
         this._rotuer.navigate(['/']);
       },(error)=>{
         console.log(error);
       });
    }
  }

}
