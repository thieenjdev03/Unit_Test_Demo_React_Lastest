import React from 'react';
import { render, fireEvent, waitFor, getByText, screen } from '@testing-library/react';
import RegisterV2 from './RegisterV2';
import axios from 'axios';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

// Mock Axios
vi.mock('axios');

describe('Register V2 Component tests', () => {
//   it('should display error alert when email is empty', async () => {
//     const mockData = {
//       fullName: 'John Doe',
//       email: '', // empty email
//       accountName: 'johndoe',
//       password: 'password123',
//       confirmPassword: 'password123'
//     };

//     const { getByLabelText, getByRole, getByText } = render(<RegisterV2 />);
//     const fullNameInput = getByLabelText('fullName');
//     const emailInput = getByLabelText('email');
//     const accountNameInput = getByLabelText('accountName');
//     const passwordInput = getByLabelText('password');
//     const confirmPasswordInput = getByLabelText('confirmPassword');
//     const submitButton = getByRole('button', { name: /submit/i });

//     fireEvent.change(fullNameInput, { target: { value: mockData.fullName } });
//     fireEvent.change(emailInput, { target: { value: mockData.email } });
//     fireEvent.change(accountNameInput, { target: { value: mockData.accountName } });
//     fireEvent.change(passwordInput, { target: { value: mockData.password } });
//     fireEvent.change(confirmPasswordInput, { target: { value: mockData.confirmPassword } });

//     await fireEvent.click(submitButton);
//     const requiredAlert = screen.getByText('Please fix the following errors before submitting.');
//     const errorMessageElement = screen.getByText('email is required');
//     expect(requiredAlert).toBeInTheDocument();
//     expect(errorMessageElement).toBeInTheDocument();
//   });
//   it('should display error notification when email is empty', async () => {
//     const { getByLabelText, getByRole, getByText } = render(<RegisterV2 />);
//     const emailInput = getByLabelText('Email');
//     const submitButton = getByRole('button', { name: /submit/i });

//     fireEvent.change(emailInput, { target: { value: ' ' } });
//     await fireEvent.click(submitButton);
//     const requiredAlert = screen.queryByText('Email is required')
//     expect(requiredAlert).not.toBeInTheDocument();
//   });
// afterEach(() => {
//     vi.clearAllMocks();
//   });

// it('should display required field error when email is not provided', async () => {
//     render(<RegisterV2 />);
//     const emailInput = screen.getByLabelText('Email');
//     const submitButton = screen.getByText('Submit');
//     fireEvent.change(emailInput, { target: { value: '' } });
//     fireEvent.click(submitButton);
//     await waitFor(() => {
//       const requiredAlert = screen.queryByText('Email is required');
//       expect(requiredAlert).toBeInTheDocument();
//     });
//   });
//   it('email input field must follow the email format', async () => {
//     render(<RegisterV2 />);

//     const emailInput = screen.getByLabelText('Email');
//     const submitButton = screen.getByText('Submit');

//     // Nhập email không hợp lệ
//     fireEvent.change(emailInput, { target: { value: 'example' } });
//     fireEvent.click(submitButton);
//     await waitFor(() => {
//       const requiredAlert = screen.queryByText('Please fix the following errors before submitting.');
//       expect(requiredAlert).toBeInTheDocument();
//     });
//   });
});
