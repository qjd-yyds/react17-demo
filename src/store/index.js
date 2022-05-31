import { legacy_createStore as createStore } from 'redux';
import { todoApp } from './reducer';
const store = createStore(todoApp);
export default store;
