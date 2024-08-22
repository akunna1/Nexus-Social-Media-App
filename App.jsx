import { useState } from 'react';
import './App.css';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'; 
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Leftbar from './components/Leftbar';

function App() {

  const currentUser = true; // Replace with actual user authentication logic

  // Layout component that includes the Navbar, Leftbar, Rightbar, and any nested routes
  const Layout = () => {
    return (
      <div>
        <Navbar />

        <div className="flex">
          <div className="w-1/6"> {/* 0.166% width for Leftbar */}
            <Leftbar />
          </div>
          <div className="w-3/6"> {/* 50% width for Home */}
            <Outlet /> {/* Outlet for rendering child routes */}
          </div>
          <div className="w-2/6"> {/* 33.33% width for Rightbar */}
            <Rightbar />
          </div>
        </div>
      </div>
    );
  };

  // ProtectedRoute function to guard routes that require authentication
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <>
      {/* The homepage should have the navbar, leftbar, profile, and rightbar */}
      <Routes>
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Home />} /> {/* Home page as a child of Layout */}
          <Route path="profile/:id" element={<Profile />} /> {/* Profile page as a child of Layout */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
