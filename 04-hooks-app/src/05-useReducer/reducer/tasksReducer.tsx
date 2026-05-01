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
    | { type: 'ADD_TODO', payload: string }
    | { type: 'TOGGLE_TODO', payload: number }
    | { type: 'DELETE_TODO', payload: number }

export const getTasksInitialState = (): TaskState => {
    return {
        todos: [],
        completed: 0,
        pending: 0,
        length: 0,
    };
}

export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false
            };
            // No hacer mutaciones directas al estado, siempre retornar un nuevo estado con los cambios aplicados
            // state.todos.push(newTodo);
            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.length + 1,
                pending: state.pending + 1
            };
        }
        case 'DELETE_TODO': {
            const filteredTodos = state.todos.filter(todo => todo.id !== action.payload);
            const completedTodos = filteredTodos.filter(todo => todo.completed);
            return {
                ...state,
                todos: filteredTodos,
                length: filteredTodos.length,
                completed: completedTodos.length,
                pending: state.todos.length - completedTodos.length,
            };
        }
        case 'TOGGLE_TODO':
            const updatedTodos = state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
            const completedTodos = updatedTodos.filter(todo => todo.completed);
            return {
                ...state,
                todos: updatedTodos,
                completed: completedTodos.length,
                pending: state.todos.length - completedTodos.length,
            };
        default:
            return state;
    }
}



