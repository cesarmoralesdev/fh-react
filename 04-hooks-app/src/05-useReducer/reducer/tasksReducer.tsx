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
| { type: 'ADD_TODO' }
| { type: 'TOGGLE_TODO', payload: { id: number } }
| { type: 'DELETE_TODO' }

export const tasksReducer = (state: TaskState, action: TaskAction): TaskState => {
    return state;
}



