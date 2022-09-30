import logo from './logo.svg';
import './App.css';
import NavBar from './shared/Navbar';
import NavBar1 from './shared/Navbar1';
import Destination from './pages/Destination/Destination';
import Nav2 from './shared/Nav2';
import Nav3 from './shared/Nav3';
import Accordion from './pages/Accordion/Accordion';

function App() {
  return (
    <>
    {/* <NavBar /> */}
    <Nav3 />
    <Nav2 />
    <NavBar1 />
    <Destination />
    <Accordion />

   

    </>
  );
}

export default App;
