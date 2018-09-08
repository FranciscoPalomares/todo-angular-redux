import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ToggleAllTodoAction } from './todo.actions';
import { AppState } from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }


  completado = false;

  toggleAll() {
    this.completado = !this.completado;

    console.log(this.completado)


    const accion = new ToggleAllTodoAction(this.completado);
    this.store.dispatch(accion);

  }

}
