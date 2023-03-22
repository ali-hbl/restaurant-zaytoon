import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Catalogue from './components/Catalogue/Catalogue';
import SignUp from './components/SingUp/SignUp';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
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
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
