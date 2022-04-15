import Sortable from '../page/Sortable';
import Todo from '../page/Todo';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/todo' element={<Todo></Todo>}></Route>
      <Route path='/sort' element={<Sortable></Sortable>}></Route>
    </Routes>
  );
}
