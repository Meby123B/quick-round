import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import SignUp from './pages/Sign-up/Sign-up';
import LogIn from './pages/log-in/Log-in';

function App() {
  return (<Routes>
    <Route path='/' element={<Home />} />
    <Route path='/sign-up/' element={<SignUp />} />
    <Route path='/log-in/'  element={<LogIn />}/>
    hello world

  </Routes>);
}

export default App;
