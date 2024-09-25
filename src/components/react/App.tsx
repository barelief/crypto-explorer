// File: App.tsx
// Purpose: Main application component that handles routing, authentication flow, and state management.
// This file defines the core structure of the app, including routes for login and items list pages, 
// and manages the authentication status and loading state during the login process.

import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import CoinListPage from './CoinListPage';
import Loader from './Loader';
import NavbarHandler from './NavbarHandler';
import { useStore } from '@nanostores/react';
import { sessionIsActive, setSessionToken } from './../../stores/sessionStore';


const App = () => {
  const isAuthenticated = useStore(sessionIsActive);

  // useState is utilized for managing the loading state during the login process,
  // which is crucial for providing feedback to the user and improving UX.
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // State to track login errors

  const handleLogin = async (login: string, password: string) => {
    setIsLoading(true); // Begin loading immediately after login attempt
    setErrorMessage(null);

    try {
      const response = await fetch('https://blon.lt/micro/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, password }),
      });

      const data = await response.json();

      if (data.token) {
        setSessionToken(data.token); // Securely store the token upon successful login
      } else {
        setErrorMessage('Invalid username or password');  // Basic error handling to inform the user of a failed login attempt
      }
    } catch (error) {
      setErrorMessage(`An error occurred during login. Please check yor internet connection. ${error}`);// Catch-all for network or unexpected errors
    } finally {
      setIsLoading(false); // Stop loading regardless of the outcome to avoid indefinite spinner
    }
  };

  return (
    <Router>
      {isAuthenticated && <NavbarHandler />}
      <main className="md:h-screen flex justify-center">
        <Routes>
          <Route
            path={`${import.meta.env.BASE_URL}/login`}
            element={
              isLoading ? (
                <Loader />
              ) : isAuthenticated ? (
                <Navigate to={`${import.meta.env.BASE_URL}/coins`}
                />
              ) : (
                <LoginPage onLogin={handleLogin} errorMessage={errorMessage} />
              )
            }
          />

          {/* Protecting the /coins route to ensure only authenticated users can access it */}
          <Route
            path={`${import.meta.env.BASE_URL}/coins`} element={
              isAuthenticated ? <CoinListPage /> : <Navigate to={`${import.meta.env.BASE_URL}/login`}
              />
            }
          />

          {/* Default route redirects to /login, guiding users to the authentication flow */}
          <Route path={`${import.meta.env.BASE_URL}/`}
            element={<Navigate to={`${import.meta.env.BASE_URL}/login`}
            />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

