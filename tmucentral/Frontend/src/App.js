

// import NavBar from './components/NavBar';
// import Login from './components/Login';

import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Register from './components/Register';
import AdCard from './components/AdCard';
import { Container} from 'react-bootstrap';
import AdDisplayCard from './components/AdDisplayCard';
import NavBar from './components/NavBar';
import { DEFAULT_MIN_BREAKPOINT } from 'react-bootstrap/esm/ThemeProvider';
import PostAd from './components/PostAd';


function App() {


  return (

<BrowserRouter>
  <Routes>
  <Route path='/postad' element={
      <PostAd/>
  
  
  } />
  <Route path="/" element={
   <div> 
    <NavBar></NavBar> <br></br>
    <div>
    <AdDisplayCard></AdDisplayCard>
    <AdDisplayCard></AdDisplayCard>
    <AdDisplayCard></AdDisplayCard>
    <AdDisplayCard></AdDisplayCard>
    </div>
    </div>
  } />
    <Route path="/register" element={<Register/>} />
  </Routes>
</BrowserRouter>




  );
}

export default App;

