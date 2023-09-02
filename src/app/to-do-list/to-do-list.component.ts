import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent {
  @Input() items: string[] = [];

  deleteTask(index: number) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }
}
