import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Task }  from '../task';

@Injectable()
export class TaskService {

  private baseUrl: string = 'https://tasklist-backend.herokuapp.com/api'
  //private baseUrl: string = 'http://localhost:8080/api'
  private headers = new Headers({'Content-Type':'application/json', 
                                "Access-Control-Allow-Origin": "*",
                                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                                "Access-Control-Allow-Headers": "origin, content-type, accept, x-requested-with"});
  private options = new RequestOptions({headers:this.headers});
  private task = new Task();

  constructor(private _http:Http) { }

  getTasks(){
    return this._http.get(this.baseUrl+'/tasks',this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  getTask(id:Number){

    return this._http.get(this.baseUrl+'/task/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  deleteTask(id:Number){

    return this._http.delete(this.baseUrl+'/task/'+id,this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  createTask(task:Task){
    return this._http.post(this.baseUrl+'/task',JSON.stringify(task),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
   
   updateTask(task:Task){
    return this._http.put(this.baseUrl+'/task',JSON.stringify(task),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }

  concludeTask(task:Task){
    return this._http.put(this.baseUrl+'/task/conclude',JSON.stringify(task),  this.options).map((response:Response)=>response.json())
      .catch(this.errorHandler);
  }
  
  errorHandler(error:Response){
     return Observable.throw(error||"SERVER ERROR");
  }

   setter(task:Task){
     this.task=task;
   }

  getter(){
    return this.task;
  }
}
