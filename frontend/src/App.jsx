import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Catalogue from './components/Catalogue/Catalogue';
import Orders from './components/Orders/Orders';
import Reservations from './components/Reservations/Reservations';
import SignUp from './components/SingUp/SignUp';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Footer from './components/Footer/Footer';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import ErrorPage from './components/ErrorPage/ErrorPage';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Login />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/reservations" element={<Reservations />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
