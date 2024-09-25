// File: LoginPage.tsx
// Login page component handling user authentication and redirection based on session token presence.
//
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ModalBase from '../react/ModalBase';

interface LoginPageProps {
  onLogin: (username: string, password: string) => void;
  errorMessage: string | null;  // Accept errorMessage as a prop
}

const LoginPage = ({ onLogin, errorMessage }: LoginPageProps) => {

  const token = sessionStorage.getItem('authTokenCoins');

  if (token) {

    // Simple session check using sessionStorage; redirects immediately if a token is found.
    // Token validation should be here for security (cookies, backend)
    return <Navigate to={`${import.meta.env.BASE_URL}/coins`} />;
  }

  // useState hooks manage controlled inputs for username and password fields,
  // ensuring the form data is kept in sync with the component's state.
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Triggers the login process by calling the provided onLogin prop function,
    // passing the username and password for authentication.
    onLogin(username, password);
  };

  return (
    <ModalBase>
      {/*  --Login Screen--> */}
      <h2 id="login-title" className="text-4xl font-bold text-gray-800 text-center mb-4">
        Hello boss!
      </h2>
      <p id="login-description" className="text-gray-600 text-center mb-4">
        Enter login and password:
      </p>

      {/* Conditionally render the error message if it exists */}
      {errorMessage && (
        <div role="alert" aria-live="assertive" className="text-red-600 text-center mb-4">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} aria-labelledby="login-title" aria-describedby="login-description">
        <div className="mb-4">
          <label className="block text-gray-600 text-xs mb-2" htmlFor="username"
          >Username</label
          >
          <input
            onChange={(e) => setUsername(e.target.value)}

            type="text"
            id="username"
            placeholder="Enter username"
            autoComplete="username"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-required="true"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-600 text-xs mb-2" htmlFor="password"
          >Password</label
          >
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Enter password"
            autoComplete="current-password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          aria-label="Log in to your account"
          className="w-full bg-pink-500 hover:bg-pink-700 text-white py-2 rounded-full transition duration-300"
        >Log in</button
        >
      </form>

    </ModalBase>
  );
};

export default LoginPage;


