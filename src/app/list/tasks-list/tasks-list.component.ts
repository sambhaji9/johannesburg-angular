import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';
import { TasksListService } from './tasks-list.service';

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasksList: ITask[] = [{
        description: '',
        priority: 0,
        status: 0,
        subtasks: [],
        timestamp: 0
    }];

    constructor(private tasksListService: TasksListService) { }

    ngOnInit(): void {
        this.tasksListService.getTasksList().subscribe((tasks) => {
            this.tasksList = tasks;
        });
    }

}
