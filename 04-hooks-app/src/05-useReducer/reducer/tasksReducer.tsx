interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
    | { type: 'ADD_TODO', payload: { text: string } }
    | { type: 'TOGGLE_TODO', payload: { id: number } }
    | { type: 'DELETE_TODO', payload: { id: number } }

export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload.text,
                completed: false
            };
            // No hacer mutaciones directas al estado, siempre retornar un nuevo estado con los cambios aplicados
            // state.todos.push(newTodo);
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.length + 1
            };
        }
        case 'DELETE_TODO':
            const filteredTodos = state.todos.filter(todo => todo.id !== action.payload.id);
            return {
                ...state,
                todos: filteredTodos,
                length: state.length - 1
            };
        case 'TOGGLE_TODO':
            const updatedTodos = state.todos.map(todo =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
            );
            return {
                ...state,
                todos: updatedTodos,
                completed: updatedTodos.filter(todo => todo.completed).length,
                pending: updatedTodos.filter(todo => !todo.completed).length
            };
        default:
            return state;
    }


    return state;
}



