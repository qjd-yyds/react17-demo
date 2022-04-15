import AppLayout from './layout';
import store from './store';
import { addTodo, toggleTodo, setVisibilityFilter } from './store/actions';
import { VisibilityFilters } from './store/actions/actionTypes';
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
function App() {
  return <AppLayout></AppLayout>;
}

export default App;
