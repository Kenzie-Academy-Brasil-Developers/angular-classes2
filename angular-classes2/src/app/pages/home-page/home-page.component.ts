import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { TodoCardComponent } from '../../components/todo-card/todo-card.component';
import { TodoCreateFormComponent } from '../../components/forms/todo-create-form/todo-create-form.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, TodoCardComponent, TodoCreateFormComponent],
  providers: [TodoService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor (private todoService: TodoService) {}

  get todoList(){
    return this.todoService.getTodoList();
  }
}
