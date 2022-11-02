import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Componets/About/About';
import Contactus from './Componets/Contactus/Contactus';
import Footer from './Componets/Footer/Footer';
import Homepage from './Componets/Homepage/Homepage';
import Login from './Componets/Login/Login';
import Navbar from './Componets/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="About" element={<About />} />
        <Route path="Contactus" element={<Contactus />} />
        <Route path="Login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
