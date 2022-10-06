import './App.css';
import NavBar1 from './shared/Navbar1';
import Destination from './pages/Destination/Destination';
import Nav3 from './shared/Nav3';
import Color from './hooks/Color';
import { Route, Router, Routes } from 'react-router-dom';
import Extra from './pages/Extra/Extra';
import Loader from './shared/Loader';



function App() {
  return (
    <>
  
  <NavBar1 />
    <Routes>
   
    {/* <Destination /> */}
    {/* <Color /> */}
    <Route path='/extra'  element={<Extra />} />
    </Routes>
    <Loader />



    </>
  );
}

export default App;
