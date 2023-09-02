import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoFormComponent,
    ToDoListComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
