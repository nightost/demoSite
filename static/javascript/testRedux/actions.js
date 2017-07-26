import {ADD_TODO , REMOVE_TODO , SET_VISIBILITY_FILTER , TOGGLE_TODO} from './actionTypes'
export {ADD_TODO as a} from './actionTypes'
export var addTodo = (text) => ({
        type : ADD_TODO,
        text
    })
export var  removeTodo = (index) => ({
        type : REMOVE_TODO,
        index : index
})

export var  setVisibilityFilter = (filter) => ({
        type : SET_VISIBILITY_FILTER,
        filter : filter
})

export var toggleTodo = (index) => ({
    type : TOGGLE_TODO,
    index : index
})