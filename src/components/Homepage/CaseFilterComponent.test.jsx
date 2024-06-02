// CaseFilterComponent.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import CaseFilterComponent from './CaseFilterComponent';
import { DoctorProvider } from '../../Context/DoctorProvider';

describe('CaseFilterComponent', () => {
    it('renders correctly', () => {
        // Mock props
        const selectedFilter = { value: 'patientName', label: 'Patient Name' };
        const handleFilterChange = sinon.spy();

        // Render the component
        render(
            <DoctorProvider>
                <CaseFilterComponent
                    selectedFilter={selectedFilter}
                    handleFilterChange={handleFilterChange}
                />
            </DoctorProvider>
        );
        expect(screen.getByText('Filter By:')).toBeInTheDocument();
        expect(screen.getByText('Patient Name')).toBeInTheDocument();
        expect(screen.getByText('Select a Doctor')).toBeInTheDocument();
    });
});
