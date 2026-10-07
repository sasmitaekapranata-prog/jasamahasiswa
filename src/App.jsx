import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordEmailPage from './pages/ForgotPasswordEmailPage';
import ForgotPasswordOtpPage from './pages/ForgotPasswordOtpPage';
import ForgotPasswordResetPage from './pages/ForgotPasswordResetPage';
import DashboardPage from './pages/DashboardPage';
import AccountPage from './pages/AccountPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />;
      case 'register':
        return <RegisterPage onNavigate={handleNavigate} />;
      case 'forgot':
      case 'forgot-email':
        return <ForgotPasswordEmailPage onNavigate={handleNavigate} />;
      case 'forgot-otp':
        return <ForgotPasswordOtpPage onNavigate={handleNavigate} />;
      case 'forgot-reset':
        return <ForgotPasswordResetPage onNavigate={handleNavigate} />;
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} />;
      case 'account':
        return <AccountPage onNavigate={handleNavigate} />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
          background-color: #f1f5f9;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .app-container {
          width: 100%;
          max-width: 430px;
          height: 100vh;
          max-height: 932px;
          background-color: #f8fafc;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          position: relative;
          overflow-y: auto;
          margin: 0 auto;
        }

        @media (max-width: 480px) {
          .app-container {
            max-width: 100%;
            height: 100vh;
            box-shadow: none;
          }
        }
      `}</style>

      {renderCurrentPage()}
    </div>
  );
}