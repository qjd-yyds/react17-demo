import { Routes, Route, Link } from 'react-router-dom';
import Sortable from './page/Sortable';
import Todo from './page/Todo';
function Home() {
  return <div>我是首页</div>;
}
function Sort() {
  return <Sortable></Sortable>;
}
function App() {
  return (
    <div className='App'>
      <nav>
        <Link to='/' className='link'>
          首页
        </Link>
        <Link to='/sort' className='link'>
          拖拽页面
        </Link>
        <Link to='/todo' className='link'>
          todo
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/sort' element={<Sort></Sort>}></Route>
      </Routes>
    </div>
  );
}

export default App;
