// ModalComponent.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalComponent from './ModalComponent';
import '@testing-library/jest-dom/extend-expect';

describe('ModalComponent', () => {
    test('renders modal box when "Open Modal" button is clicked', () => {
        render(<ModalComponent />);

        // Check that the modal is not visible initially
        expect(screen.queryByText(/Modal Title/i)).not.toBeInTheDocument();

        // Click the "Open Modal" button
        fireEvent.click(screen.getByText(/Open Modal/i));

        // Check that the modal is now visible
        expect(screen.getByText(/Modal Title/i)).toBeInTheDocument();
        expect(screen.getByText(/This is a simple modal box/i)).toBeInTheDocument();

        // Click the "Close" button
        fireEvent.click(screen.getByText(/Close/i));

        // Check that the modal is not visible after closing
        expect(screen.queryByText(/Modal Title/i)).not.toBeInTheDocument();
    });
});
