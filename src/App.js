import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import Alldata from './alldata';
import Nav_bar from './navbar';

function App() {
  return (<>
      <Nav_bar></Nav_bar>
      <HashRouter>
        <Routes>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/deposit' element={<Deposit></Deposit>}></Route>
          <Route path='/cashback' element={<Cashback></Cashback>}></Route>
          <Route path='/alldata' element={<Alldata></Alldata>}></Route>
        </Routes>
      </HashRouter>
  </>);
}

export default App;
