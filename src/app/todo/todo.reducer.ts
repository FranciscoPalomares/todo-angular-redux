
import * as fromTdodo from './todo.actions';
import { Todo } from './model/todo.model'



const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar al mundo');
const todo3 = new Todo('Pedir prestado traje');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3]


export function todoReducer(state = estadoInicial,
    action: fromTdodo.Acciones): Todo[] {

    switch (action.type) {

        case fromTdodo.AGREGAR_TODO:
            const todo = new Todo(action.texto);

            //Clonando estado actual EMACSCRIPT6
            return [...state, todo];


        case fromTdodo.TOGGLE_ALL_TODO:
            return state.map(todoToggle => {
                return {
                    ...todoToggle,
                    completado: action.completado
                }
            });

        case fromTdodo.TOGGLE_TODO:

            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        completado: !todoEdit.completado
                    }
                } else {
                    return todoEdit;
                }
            });

        case fromTdodo.EDITAR_TODO:
            return state.map(todoEdit => {
                if (todoEdit.id === action.id) {
                    return {
                        ...todoEdit,
                        texto: action.texto.charAt(0).toUpperCase() + action.texto.slice(1)
                    }
                }
                else {
                    return todoEdit;
                }
            });

        case fromTdodo.BORRAR_TODO:
            return state.filter(todoBorrar => todoBorrar.id !== action.id);


        case fromTdodo.BORRAR_ALL_TODO:
            return state.filter(todoBorrar => !todoBorrar.completado);



        default:
            return state;

    }

}