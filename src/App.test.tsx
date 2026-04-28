import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders welcome message', () => {
    render(<App />);
    const welcomeElement = screen.getByText(/Welcome to Our Application/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders feature description', () => {
    render(<App />);
    const featureDescription = screen.getByText(/A beautifully designed component with React and Tailwind CSS/i);
    expect(featureDescription).toBeInTheDocument();
  });

  test('renders three feature cards', () => {
    render(<App />);
    const featureCards = screen.getAllByText(/Feature [1-3]/i);
    expect(featureCards).toHaveLength(3);
  });

  test('renders Get Started button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Get Started/i });
    expect(button).toBeInTheDocument();
  });

  test('renders Learn More button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Learn More/i });
    expect(button).toBeInTheDocument();
  });

  test('renders footer with copyright', () => {
    render(<App />);
    const footer = screen.getByText(/© 2023 React & Tailwind CSS Component/i);
    expect(footer).toBeInTheDocument();
  });
});