import {TOGGLE_TODO, ADD_TODO} from './type'

let nextId = 0;
export const addTodo = text => {
    console.log('addddddd');

    return {
        type: ADD_TODO,
        id: nextId++,
        text: text
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    }
}