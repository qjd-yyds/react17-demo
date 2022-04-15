import { ADD_TODD, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';
export function addTodo(text) {
  return {
    type: ADD_TODD,
    text
  };
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
}
