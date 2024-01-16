import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-create-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-create-form.component.html',
  styleUrl: './todo-create-form.component.css',
})
export class TodoCreateFormComponent {
  constructor(private todoService: TodoService) {}

  title = new FormControl('');
  content = new FormControl('');

  onSubmit(event: Event) {
    event.preventDefault();
    const data = {
      title: this.title.value as string,
      content: this.content.value as string,
    };
    this.todoService.addTodo(data);
    this.title.setValue("");
    this.content.setValue("");
  }
}
