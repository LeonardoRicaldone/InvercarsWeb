import './App.css'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import PasswordRecovery from './pages/PasswordRecovery'
import VerifyCode from './pages/VerifyCode'
import ResetPassword from './pages/ResetPassword'
import NavBar from './components/NavBar';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Cars from './pages/Cars';
import Brands from './pages/Brands';

//Se crea una constante hijo para el nav, con el motivo de 
//que solo aparezca en las pantallas después del login

const LayoutWithNav = ({ children }) => {

  return (

    <div className="with-nav">
      <NavBar />
      <div className="page-content">
        {children}
      </div>
    </div>
  );

};

function App() {
  return (
    <Router>
      <Routes>

        {/* PANTALLAS SIN NAV */}

        <Route path="/"                 element={<Welcome/>} />
        <Route path="/login"            element={<Login />} />
        <Route path="/register"         element={<Register />} />
        <Route path="/passwordrecovery" element={<PasswordRecovery />} />
        <Route path="/verifycode"       element={<VerifyCode/>}/>
        <Route path="/resetpassword"    element={<ResetPassword/>}/>
        
        {/* PANTALLAS CON NAV */}

        <Route path="/cars" element={
          <LayoutWithNav>
            <Cars/>
          </LayoutWithNav>
        }/>

        <Route path="/brands" element={
          <LayoutWithNav>
            <Brands/>
          </LayoutWithNav>
        }/>

        <Route path="/profile" element={
          <LayoutWithNav>
            <Profile/>
          </LayoutWithNav>
        }/>

        <Route path="/dashboard" element={
          <LayoutWithNav>
            <Dashboard/>
          </LayoutWithNav>
        }/>
        
      </Routes>
    </Router>
  )
}

export default App