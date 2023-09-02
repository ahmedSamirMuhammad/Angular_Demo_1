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

  // addTask() {
  //   let taskInput = document.getElementById('taskInput') as HTMLInputElement;
  //   let taskList = document.getElementById('taskList');

  //   if (taskInput.value.trim() !== '' && taskList != null) {
  //     let listItem = document.createElement('li');
  //     listItem.className =
  //       'list-group-item d-flex justify-content-between align-items-center';
  //     listItem.innerHTML = `
  //           ${taskInput.value}
  //           <span>
  //               <button class="btn btn-success btn-sm mr-2" onclick="completeTask(this)">Complete</button>
  //               <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">Delete</button>
  //           </span>
  //       `;

  //     taskList.appendChild(listItem);
  //     taskInput.value = '';
  //   }
  // }
}
