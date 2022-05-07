import Sortable from '../page/Sortable';
import Todo from '../page/Todo';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import List from '../page/List';
import UseState from '../page/Hooks/useState';
import UseEffect from '../page/Hooks/UseEffect';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/todo' element={<Todo></Todo>}></Route>
      <Route path='/sort' element={<Sortable></Sortable>}></Route>
      <Route path='/list' element={<List></List>}></Route>
      <Route path='/hooks/useState' element={<UseState></UseState>}></Route>
      <Route path='/hooks/useEffect' element={<UseEffect></UseEffect>}></Route>
    </Routes>
  );
}
