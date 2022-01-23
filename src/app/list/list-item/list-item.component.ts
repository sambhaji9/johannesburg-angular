import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/app/interfaces/task';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

    @Input() item: ITask = {
        description: '',
        priority: 0,
        status: 0,
        subtasks: [],
        timestamp: 0
    };

    constructor() { }

    ngOnInit(): void {
        console.log(this.item);
    }

}
