import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-create-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-create-form.component.html',
  styleUrl: './todo-create-form.component.css'
})
export class TodoCreateFormComponent {
  title = new FormControl("");
  content = new FormControl("");
}
