import './App.css';
import NavBar1 from './shared/Navbar1';
import Destination from './pages/Destination/Destination';

import Color from './hooks/Color';
import { Route, Router, Routes } from 'react-router-dom';
import Extra from './pages/Extra/Extra';
import Loader from './shared/Loader';
import About from './pages/About/About';
import Date from './pages/Extra/Date';
import ImageViewer from './pages/Extra/ImageViewer';




function App() {
  return (
    <>

  <NavBar1 />
    <Routes>
   
 
    <Route path='/extra'  element={<Extra />} />
    <Route path='/about' element={<About />} />
    <Route path='/image' element={<ImageViewer />} />
    {/* <Route path='/date' element={<Date />} /> */}
    
    </Routes>
    <Loader />



    </>
  );
}

export default App;
