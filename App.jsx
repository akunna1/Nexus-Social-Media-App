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
import Navbar2 from './components/Navbar2'; // The second navbar for small and medium screens
import ScrollToTop from './components/scroll';

function App() {

  const currentUser = true; // Replace with actual user authentication logic

  // Layout component that includes the Navbar, Leftbar, Rightbar, and any nested routes
  const Layout = () => {
    return (
      <div>
        <Navbar /> {/* Displays the navigation bar at the top */}
        
        {/* Container for the main content */}
        <div className="flex mb-20 lg:mb-0">
          {/* Leftbar hidden on small/medium screens */}
          <div className="hidden lg:block w-1/6"> 
            <Leftbar />
          </div>

          {/* Main content with dynamic width based on screen size */}
          <div className="w-full md:w-3/5 lg:w-3/6"> 
            <Outlet /> {/* Renders the child route components like Home or Profile */}
          </div>

          {/* Rightbar hidden on small screens, visible on medium and large screens */}
          <div className="hidden md:block md:w-2/5 lg:w-2/6"> 
            <Rightbar />
          </div>
        </div>

        <Navbar2 /> {/* Displays the second navbar for small/medium screens */}

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
      <ScrollToTop />
      <Routes>
        {/* Rendering Home and Profile (child elements) into Outlet, components --> Outlet --> Layout*/}
        <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<Home />} /> {/* Default child */}
          <Route path="profile/:id" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
