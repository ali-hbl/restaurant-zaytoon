import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
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
import './App.scss';

const Catalogue = lazy(() => import('./components/Catalogue/Catalogue'));
const ErrorPage = lazy(() => import('./components/ErrorPage/ErrorPage'));
const CheckoutSuccess = lazy(() => import('./components/CheckoutSuccess/CheckoutSuccess'));
const CheckoutError = lazy(() => import('./components/CheckoutError/CheckoutError'));
const Dashboard = lazy(() => import('./components/Dashboard/Dashboard'));
const DashboardCatalogue = lazy(() =>
  import('./components/Dashboard/components/DashboardCatalogue/DashboardCatalogue')
);
const DashboardOrders = lazy(() => import('./components/Dashboard/components/DashboardOrders/DashboardOrders'));
const DashboardMessages = lazy(() =>
  import('./components/Dashboard/components/DashboardMessages/DashboardMessages.jsx')
);
const DashboardUsers = lazy(() => import('./components/Dashboard/components/DashboardUsers/DashboardUsers.jsx'));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Login />
        <NavBar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/back-office" element={<Dashboard />}>
                <Route path="catalogue" element={<DashboardCatalogue />} />
                <Route path="orders" element={<DashboardOrders />} />
                <Route path="users" element={<DashboardUsers />} />
                <Route path="messages" element={<DashboardMessages />} />
              </Route>
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/catalogue" element={<Catalogue />} />
            <Route path="/success" element={<CheckoutSuccess />} />
            <Route path="/cancel" element={<CheckoutError />} />
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
