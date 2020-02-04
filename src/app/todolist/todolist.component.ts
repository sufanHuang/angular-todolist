import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todos.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todos: Todo[];
  todo: {
    title;
    completed:false;
  }

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos=>{
      this.todos = todos;
    });
  }
  deleteTodo(todo: Todo){
    this.todos = this.todos.filter(item => item.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }
  addTodo(todo:Todo){
    this.todoService.addTodo(todo).subscribe(todo =>{
      this.todos.push(todo);
    });
  }
}
