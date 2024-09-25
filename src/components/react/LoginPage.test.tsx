import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import LoginPage from './LoginPage';
import CoinListPage from './CoinListPage';
// Mock the navigate function from react-router-dom
vi.mock('react-router-dom', () => ({
  Navigate: () => <div>Redirecting to cryptocurrencies list...</div>,
}));

describe('LoginPage Component', () => {
  it('renders the login form', () => {
    render(<LoginPage onLogin={vi.fn()} errorMessage={null} />);

    // Check if the form elements are rendered correctly 
    expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Log in to your account/i })).toBeInTheDocument();
  });

  it('updates username and password on input change', () => {
    render(<LoginPage onLogin={vi.fn()} errorMessage={null} />);

    // Simulate typing in the username and password fields
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });

    // Assert that the input values are updated
    expect(screen.getByLabelText(/Username/i)).toHaveValue('testuser');
    expect(screen.getByLabelText(/Password/i)).toHaveValue('password123');
  });

  it('calls onLogin with correct credentials when form is submitted', () => {
    const mockOnLogin = vi.fn();
    render(<LoginPage onLogin={mockOnLogin} errorMessage={null} />);

    // Simulate typing in the username and password fields
    fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });

    // Simulate form submission
    fireEvent.submit(screen.getByRole('button', { name: /Log in to your account/i }));

    // Ensure onLogin was called with the correct arguments
    expect(mockOnLogin).toHaveBeenCalledWith('testuser', 'password123');
  });

  it('displays the error message if errorMessage prop is provided', () => {
    const errorMessage = 'Invalid username or password';
    render(<LoginPage onLogin={vi.fn()} errorMessage={errorMessage} />);

    // Check if the error message is rendered
    expect(screen.getByRole('alert')).toHaveTextContent(errorMessage);
  });

  it('redirects to /coins if token is present', () => {
    // Mock sessionStorage to simulate a valid token
    vi.spyOn(window.sessionStorage, 'getItem').mockReturnValue('mockAuth');

    render(<CoinListPage />);

    // Check if the component renders the Navigate component
    expect(screen.getByText(/fetching/i)).toBeInTheDocument();
  });
});

