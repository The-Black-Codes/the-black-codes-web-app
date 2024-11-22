import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHome from './pages/Admin/AdminHome';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
