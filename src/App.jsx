import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Toaster } from 'sonner'; // Add this import
import 'react-toastify/dist/ReactToastify.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/InstituteGallery';
import Login from './Components/Login';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import CoursePage from './pages/CoursePage';
import NotFound from './pages/NotFound';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const { role } = JSON.parse(storedAuth);
      setIsAuthenticated(true);
      setUserRole(role);
    }
  }, []);

  const handleLogin = useCallback((role) => {
    setIsAuthenticated(true);
    setUserRole(role);
    localStorage.setItem('auth', JSON.stringify({ role }));
    toast.success(`Logged in successfully as ${role}!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuthenticated(false);
    setUserRole(null);
    localStorage.removeItem('auth');
    toast.success('Logged out successfully!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, []);

  // Protected Route Component
  const ProtectedRoute = ({ children, allowedRole }) => {
    if (!isAuthenticated) {
      return <Navigate to={`/login/${allowedRole}`} replace />;
    }

    if (allowedRole && userRole !== allowedRole) {
      toast.error("You don't have permission to access this page.");
      return <Navigate to="/" replace />;
    }

    return children;
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header isAuthenticated={isAuthenticated} userRole={userRole} onLogout={handleLogout} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Toaster /> {/* Add this line for sonner toast */}
        
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/courses/:coursePath" element={<CoursePage />} />
            
            {/* Auth Routes */}
            <Route 
              path="/login/:userType" 
              element={
                <Login 
                  onLogin={handleLogin} 
                  isAuthenticated={isAuthenticated}
                  userRole={userRole}
                />
              } 
            />

            {/* Protected Routes */}
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute allowedRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/student/*"
              element={
                <ProtectedRoute allowedRole="student">
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />

            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;