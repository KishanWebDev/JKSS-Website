import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn, LogOut } from 'lucide-react';

const Header = ({ isAuthenticated, userRole, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const courses = [
    { name: 'CCC', path: 'ccc' },
    { name: 'ADCA', path: 'adca' },
    { name: 'DCA', path: 'dca' },
    { name: 'PGDCA', path: 'pgdca' },
    { name: 'Data Entry Course', path: 'data-entry-course' },
    { name: "'O' Level", path: 'o-level' },
    { name: "'A' Level", path: 'a-level' }
  ];

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'Gallery', link: '/gallery' }
  ];

  const handleLogoutClick = () => {
    onLogout();
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/JKSS logo.jpg"
                alt="JKSS Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Courses Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block">
                {courses.map((course) => (
                  <Link
                    key={course.name}
                    to={`/courses/${course.path}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Authentication Links */}
            {isAuthenticated ? (
              <>
                <Link
                  to={userRole === 'admin' ? '/admin' : '/student'}
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogoutClick}
                  className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <LogOut className="w-5 h-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login/student"
                  className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <LogIn className="w-5 h-5 mr-1" />
                  Student Login
                </Link>
                <Link
                  to="/login/admin"
                  className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <LogIn className="w-5 h-5 mr-1" />
                  Admin Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="py-2">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition duration-300"
              >
                Courses <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isDropdownOpen && (
                <div className="pl-4 mt-2">
                  {courses.map((course) => (
                    <Link
                      key={course.name}
                      to={`/courses/${course.path}`}
                      className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {/* Mobile Authentication Links */}
            {isAuthenticated ? (
              <>
                <Link
                  to={userRole === 'admin' ? '/admin' : '/student'}
                  className="block py-2 text-gray-700 hover:text-blue-600 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogoutClick}
                  className="py-2 text-gray-700 hover:text-blue-600 transition duration-300 w-full text-left flex items-center"
                >
                  <LogOut className="w-5 h-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login/student"
                  className="py-2 text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="w-5 h-5 mr-1" />
                  Student Login
                </Link>
                <Link
                  to="/login/admin"
                  className="py-2 text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="w-5 h-5 mr-1" />
                  Admin Login
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;