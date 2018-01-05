import {TOGGLE_TODO, ADD_TODO, GET_STORAGE} from './type'

let nextId = 0;
export const addTodo = text => {

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

export const getStorage = (storage) => {
    return {
        type : GET_STORAGE,
        storage
    }
}