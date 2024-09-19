import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeSwitch from './components/ThemeSwitch';
import ActiveSectionContextProvider from './context/active-section-context';
import ThemeContextProvider from './context/theme-context';
import { BudgetProvider } from './context/BudgetContext';
import { Toaster } from 'react-hot-toast';
import DashboardLayout from './components/DashboardLayout';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/index.css';

// Higher-order component for routes with Navbar and Footer
const withNavbarAndFooter = (Component: React.FC) => (
  <>
    <Navbar />
    <Component />
    <Footer />
  </>
);

function App() {
  return (
    <div className="bg-gray-50 text-gray-950 flex flex-col min-h-screen dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
      <Helmet>
        <title>Budget Manager</title>
        <meta name="description" content="A simple budget management application" />
        <meta name="keywords" content="budget, finance, management, application" />
        <meta name="author" content="Your Name" />
      </Helmet>
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <BudgetProvider>
            <Router>
              <main className="flex-grow flex flex-col items-center px-4">
                <Routes>
                  <Route path="/" element={withNavbarAndFooter(Home)} />
                  <Route path="/about" element={withNavbarAndFooter(About)} />
                  <Route path="/login" element={withNavbarAndFooter(Login)} />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute
                        element={
                          <DashboardLayout>
                            <Dashboard />
                          </DashboardLayout>
                        }
                      />
                    }
                  />
                  {/* Fallback route for 404 errors */}
                  <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
              </main>
              <Toaster position="top-right" />
              <ThemeSwitch />
            </Router>
          </BudgetProvider>
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;