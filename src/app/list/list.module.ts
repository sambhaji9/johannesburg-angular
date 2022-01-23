import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';

@NgModule({
  declarations: [TasksListComponent],
  imports: [
    CommonModule
  ],
  exports: [TasksListComponent]
})
export class ListModule { }
