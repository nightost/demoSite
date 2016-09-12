import {ADD_TODO , REMOVE_TODO , SET_VISIBILITY_FILTER , TOGGLE_TODO , VisibilityFilters} from './actionTypes'
import {combineReducers} from 'redux'
const {SHOW_ALL} = VisibilityFilters
const initialState = {
    visibilityFilters : VisibilityFilters.SHOW_ALL,
    todos : []
}

function todos(state = [] , action){
    switch(action.type){
        case ADD_TODO : 
            return [
                    ...state,
                    {
                        completed : false,
                        text : action.text
                    }
                ]
        case TOGGLE_TODO : 
            return state.map((todoItem , index) => {
                if(index !== action.index){
                    return todoItem
                }
                return Object.assign({} , todoItem , {
                        completed : !todoItem.completed
                })
            })
        default : 
            return state;
    }
}

function visibilityFilters(state = SHOW_ALL , action){
    switch(action.type){
        case SET_VISIBILITY_FILTER: 
             return action.filter
        default :
            return state
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilters
});
export default todoApp;