
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Register from './Register';
import AdCard from './AdCard';
import { Container} from 'react-bootstrap';
import AdDisplayCard from './AdDisplayCard';
import NavBar from './NavBar';
import { DEFAULT_MIN_BREAKPOINT } from 'react-bootstrap/esm/ThemeProvider';
import PostAd from './PostAd';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from "../contexts/AuthContext"
import Dash from './Dash';
function App() {


  return (

<BrowserRouter>
<AuthProvider>
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
    <Route path="/login" element={<Login/>} />
    {/* <Route path="/admin" element={<AdminDashboard/>} /> */}
    
    <Route element={<PrivateRoute />}> 
            <Route path="/dashboard" element={<Dash />} />
          </Route>


    <Route path="/admin" element={<PrivateRoute component={AdminDashboard} />} />
  </Routes>
  </AuthProvider>
</BrowserRouter>




  );
}

export default App;

