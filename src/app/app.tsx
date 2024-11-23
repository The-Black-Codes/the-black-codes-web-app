import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHome from './pages/Admin/AdminHome';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { MyProvider } from './context/EventsProvider';

export const App = () => {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
};

export default App;
