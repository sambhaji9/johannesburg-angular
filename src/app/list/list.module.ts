import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [TasksListComponent, ListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [TasksListComponent]
})
export class ListModule { }
