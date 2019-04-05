import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ListtaskComponent } from './components/listtask/listtask.component';
import { TaskComponent } from './components/task/task.component';
import { TaskService } from './shared-service/task.service';


const appRoutes: Routes =[
  { path: '', component: ListtaskComponent},
  { path: 'task', component: TaskComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ListtaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
