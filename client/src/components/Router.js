import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import SpotDetails from './Pages/SpotDetails';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import ProtectedRoute from './ProtectedRoute';

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/"
        element={
          <ProtectedRoute element={<Home />} />
        }
      />
      <Route
        path="/spot/:spotName"
        element={
          <ProtectedRoute element={<SpotDetails />} />
        }
      />
    </Routes>
  );
}

export default AppRouter;
