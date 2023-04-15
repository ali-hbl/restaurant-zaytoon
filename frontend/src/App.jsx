import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Reservations from './components/Reservations/Reservations';
import SignUp from './components/SingUp/SignUp';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import Profile from './components/Profile/Profile';
import ResetPassword from './components/ResetPassword/ResetPassword';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import ErrorPage from './components/ErrorPage/ErrorPage';
import './App.scss';

const Catalogue = lazy(() => import('./components/Catalogue/Catalogue'));
const ErrorPage = lazy(() => import('./components/ErrorPage/ErrorPage'));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Login />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/reservations" element={<Reservations />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route
              path="/catalogue"
              element={
                <Suspense fallback={<Loader />}>
                  <Catalogue />
                </Suspense>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>

        <ScrollToTop />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
