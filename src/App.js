import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Blogs from './Components/Blogs/Blogs';
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <div className='header-div'>
        <div>
          <h2 className='header-title'>KimberlyLaw</h2>
          <h3 className='header-title2'>Criminal Defense</h3>
        </div>
        <div className='header-text'>
          <h2>Call US</h2>
          <h2>+8801622354928</h2>
        </div>
      </div>

      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="services" element={<Services></Services>} />
        <Route path="checkout" element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } />
        <Route path="blogs" element={<Blogs></Blogs>} />
        <Route path="about" element={<AboutMe></AboutMe>} />
        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
        <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
