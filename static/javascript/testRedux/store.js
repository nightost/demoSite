import {createStore} from 'redux'
import todoApp from './reducers'
import {ADD_TODO , REMOVE_TODO , SET_VISIBILITY_FILTER , TOGGLE_TODO , VisibilityFilters} from './actionTypes'
import {addTodo , toggleTodo , removeTodo , setVisibilityFilter} from './actions'
console.log(typeof todoApp);
let store = createStore(todoApp);
let unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
store.dispatch(addTodo('Learn about actions'))
store.dispatch(toggleTodo(0))
store.dispatch(addTodo('Learn about actions2'))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// 停止监听 state 更新
unsubscribe();