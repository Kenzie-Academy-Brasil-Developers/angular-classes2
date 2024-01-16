import { Injectable } from '@angular/core';
import { ITodo, TTodoCreateFormData } from '../interfaces/todo.interface';

@Injectable({ providedIn: 'root' })
export class TodoService {
    private todoList: ITodo[] = [];

    getTodoList(){
        return this.todoList;
    }

    addTodo(formData: TTodoCreateFormData){
        const newTodo = { ...formData, id: crypto.randomUUID() };
        this.todoList.push(newTodo);
    }

    removeTodo(removingId: string){
        const index = this.todoList.findIndex(todo => todo.id === removingId);
        this.todoList.splice(index, 1);
    }
}
