import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import SingleHouse from './components/SingleHouse';
import { HouseProvider } from './context/HouseContext';
function App() {
  return (
    <HouseProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<SingleHouse />} path="/houses/:id" />
          <Route element={<NotFound />} path="*" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HouseProvider>
  );
}

export default App;
