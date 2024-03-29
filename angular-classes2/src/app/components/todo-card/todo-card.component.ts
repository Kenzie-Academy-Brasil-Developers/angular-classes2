import { Component, Input } from '@angular/core';
import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-card',
  standalone: true,
  imports: [],
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css'
})
export class TodoCardComponent {
  @Input() todo!: ITodo;
}
