import Sortable from '../page/Sortable';
import Todo from '../page/Todo';
import { Routes, Route } from 'react-router-dom';
function Home() {
  return <div>我是首页</div>;
}
function Sort() {
  return <Sortable></Sortable>;
}

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/todo' element={<Todo></Todo>}></Route>
      <Route path='/sort' element={<Sort></Sort>}></Route>
    </Routes>
  );
}
