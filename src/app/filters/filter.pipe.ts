import * as fromFiltro from './filter.actions';
import { Todo } from './../todo/model/todo.model';
import { Pipe, PipeTransform } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';



@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFiltro.filtrosValidos): Todo[] {

    //console.log(todos);

    //console.log(filtro);


    if (filtro == 'todos')
      return todos;

    else if (filtro == 'pendientes') {

      return todos.filter(todoBorrar => !todoBorrar.completado)

    }

    else if (filtro == 'completados') {

      return todos.filter(todoBorrar => todoBorrar.completado)

    }


    return todos;

  }

}
