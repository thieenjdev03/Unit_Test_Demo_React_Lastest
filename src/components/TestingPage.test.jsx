import React from 'react';
import { render, fireEvent, queryByText,getByText, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestPage from '../components/TestPage'; // Adjust the path to your TestPage component
import { useLocation } from 'react-router-dom';

describe('TestPage Component', () => {
  it('should render Testing page text', () => {
    render(<TestPage />);
    const text = screen.getAllByText('Testing page')
    expect(text).toBeInTheDocument()
  });
});
