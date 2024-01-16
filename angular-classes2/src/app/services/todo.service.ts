import { Injectable, signal } from '@angular/core';
import { ITodo, TTodoCreateFormData } from '../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoService {
  readonly todoList = signal<ITodo[]>([]);

  getTodoList() {
    return this.todoList();
  }

  addTodo(formData: TTodoCreateFormData) {
    const newTodo = { ...formData, id: crypto.randomUUID() };
    this.todoList.update((todoList) => [...todoList, newTodo]);
  }

  removeTodo(removingId: string) {
    this.todoList.update((todoList) =>
      todoList.filter((todo) => todo.id !== removingId)
    );
  }
}
