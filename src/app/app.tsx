import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { MyProvider } from './context/EventsProvider';
import AdminHome from './pages/Admin/AdminHome';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    loginWithRedirect();
    return null; // Prevent rendering until redirect completes
  }

  return children;
};

export const App = () => {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
};

export default App;
