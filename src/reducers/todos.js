import {ADD_TODO, TOGGLE_TODO, GET_STORAGE} from '../actions/type'

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => (todo.id === action.id) ? {...todo, completed: !todo.completed} : todo)

        case GET_STORAGE:
            return [
                ...state,
                ...action.storage
            ]
        default:
            return state;
    }
}
export default todos;