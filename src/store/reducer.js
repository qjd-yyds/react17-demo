/*******
 * @description: reducer 是一个纯函数，接受一个state和一个action，返回一个新的state
 */

 import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODD, TOGGLE_TODO } from './actions/actionTypes';
 import { combineReducers } from 'redux';
 
 function todos(state = [], action) {
   switch (action.type) {
     case ADD_TODD:
       return [
         ...state,
         {
           text: action.text,
           completed: false
         }
       ];
     case TOGGLE_TODO:
       return state.map((todo, index) => {
         if (index === action.index) {
           return Object.assign({}, todo, {
             completed: !todo.completed
           });
         }
         return todo;
       });
     default:
       return state;
   }
 }
 function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
   switch (action.type) {
     case SET_VISIBILITY_FILTER:
       return action.filter;
     default:
       return state;
   }
 }
 const todoApp = combineReducers({
   visibilityFilter,
   todos
 });
 
 export { todoApp };
 