import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css'],
})
export class ToDoFormComponent {
  @Output() newItemEvent = new EventEmitter<string>();
  addNewTask(value: string) {
    this.newItemEvent.emit(value);
  }
}
