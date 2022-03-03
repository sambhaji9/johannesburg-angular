import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [TasksListComponent, NewTaskComponent],
  imports: [
    CommonModule
  ],
  exports: [TasksListComponent, NewTaskComponent]
})
export class ListModule { }
