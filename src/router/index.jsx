import Sortable from '../page/Sortable';
import Todo from '../page/Todo';
import { Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import List from '../page/List';
function resolveComponents(ctx, prefix = '/') {
  const paths = [];
  ctx.keys().forEach(path => {
    let componentName = path.replace(/^\.\/(.*)\.jsx/g, '$1');
    componentName = componentName.substring(0, 1).toUpperCase() + componentName.substring(1);
    const component = ctx(path).default;
    paths.push({
      name: componentName,
      path: prefix + componentName,
      component
    });
  });

  const routes = paths.map(item => {
    return <Route key={item.path} path={item.path} element={<item.component></item.component>} />;
  });
  return {
    paths,
    routes
  };
}
const hooksRoutes = resolveComponents(require.context('../page/Hooks', false, /\.jsx?/), '/hooks/');
export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/todo" element={<Todo></Todo>}></Route>
      <Route path="/sort" element={<Sortable></Sortable>}></Route>
      <Route path="/list" element={<List></List>}></Route>
      {hooksRoutes.routes}
    </Routes>
  );
}
export { hooksRoutes };
