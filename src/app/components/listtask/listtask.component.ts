import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared-service/task.service';
import { Task } from '../../task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listtask',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.css']
})
export class ListtaskComponent implements OnInit {

  tasks: Task[];
  constructor(private _taskService: TaskService, private _router: Router) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this._taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    }, (error) => {
      console.log(error);
    })
  }

  deleteTask(task) {
    this._taskService.deleteTask(task.id).subscribe((data) => {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }, (error) => {
      console.log(error);
    });
  }

  changeStatus(task) {
    task.status = !task.status;
    this._taskService.concludeTask(task).subscribe((task)=>{
    },(error)=>{
      console.log(error);
    });
    this.getTasks();
  }

  updateTask(task) {
    this._taskService.setter(task);
    this._router.navigate(['/task']);
  }

  newTask() {
    let task = new Task();
    this._taskService.setter(task);
    this._router.navigate(['/task']);
  }


}
