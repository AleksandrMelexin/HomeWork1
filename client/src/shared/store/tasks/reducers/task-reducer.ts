import { TaskAction, TaskActionTypes, TaskState } from "../types/task"

const initialState: TaskState = {
    tasks: [],
    statusFilter: 'всe',
    priorityFilter: 'всe',
    typeFilter: 'всe',
}

export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
    switch (action.type) {
        case TaskActionTypes.FETCH_TASKS:
            return { ...state, tasks: action.payload }
        case TaskActionTypes.ADD_TASK:
            return { 
                ...state, tasks: [...state.tasks, action.payload] }
        case TaskActionTypes.UPDATE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            };
        case TaskActionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        default:
            return state
    }
}