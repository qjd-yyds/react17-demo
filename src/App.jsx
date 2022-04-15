import { useSelector } from 'react-redux';
import AppLayout from './layout';
import { updateName } from './stores/actions/home';
function App(props) {
  const data = useSelector(updateName);
  console.log(data);
  return <AppLayout></AppLayout>;
}

export default App;