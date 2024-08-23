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
        <Navbar /> {/* Displays the navigation bar at the top */}

        {/* Container for the main content, divided into three columns */}
        <div className="flex">
          <div className="w-1/6"> {/* Leftbar takes up 16.67% of the width */}
            <Leftbar />
          </div>
          <div className="w-3/6"> {/* Main content (e.g., Home or Profile) takes up 50% of the width */}
            <Outlet /> {/* Renders the child route components like Home or Profile */}
          </div>
          <div className="w-2/6"> {/* Rightbar takes up 33.33% of the width */}
            <Rightbar />
          </div>
        </div>
      </div>
    );
  };

  // ProtectedRoute function guards routes that require authentication
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />; // Redirects to login if the user is not authenticated
    }

    return children; // Renders the protected content if authenticated
  };

  return (
    <>
      {/* Defining the routes for the app */}
      <Routes>
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Home />} /> {/* Home page as the default child of Layout */}
          <Route path="profile/:id" element={<Profile />} /> {/* Profile page as a child of Layout */}
        </Route>
        <Route path="/login" element={<Login />} /> {/* Login page route */}
        <Route path="/register" element={<Register />} /> {/* Register page route */}
      </Routes>
    </>
  );
}

export default App;
