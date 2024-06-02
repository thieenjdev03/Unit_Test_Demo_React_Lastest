/* eslint-disable no-undef */
// CasesListComponent.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import CasesListComponent from './CasesListComponent';
import { CaseProvider, CaseContext } from '../../Context/CaseProvider'


describe('CasesListComponent', () => {
    it('displays cases correctly', () => {
        // Mock data
        const cases = [
            {
                id: 1,
                patientName: 'John Doe',
                age: 30,
                gender: 'Male',
                diagnosis: 'Fever',
                medication: 'Paracetamol',
                caseDescription: 'Description for case 1',
            },
            {
                id: 2,
                patientName: 'Jane Smith',
                age: 25,
                gender: 'Female',
                diagnosis: 'Cough',
                medication: 'Cough Syrup',
                caseDescription: 'Description for case 2',
            },
        ];

        // Render component with mock data
        render(<CasesListComponent cases={cases} />);

        // Check if cases are displayed correctly
        const caseItems = screen.getAllByTestId('case-item');
        expect(caseItems).toHaveLength(cases.length);

        cases.forEach((caseItem, index) => {
            const displayedPatientName = screen.getByText(caseItem.patientName);
            const displayedAge = screen.getByText(`Age: ${caseItem.age}`);
            const displayedGender = screen.getByText(`Gender: ${caseItem.gender}`);
            const displayedDiagnosis = screen.getByText(`Diagnosis: ${caseItem.diagnosis}`);
            const displayedMedication = screen.getByText(`Medication: ${caseItem.medication}`);
            const displayedDescription = screen.getByText(caseItem.caseDescription);

            expect(displayedPatientName).toBeInTheDocument();
            expect(displayedAge).toBeInTheDocument();
            expect(displayedGender).toBeInTheDocument();
            expect(displayedDiagnosis).toBeInTheDocument();
            expect(displayedMedication).toBeInTheDocument();
            expect(displayedDescription).toBeInTheDocument();
        });
    });

    it('displays "No cases found" when cases array is empty', () => {
        // Render component with empty cases array
        render(<CasesListComponent cases={[]} />);

        // Check if "No cases found" message is displayed
        const noCasesMessage = screen.getByText('No cases found');
        expect(noCasesMessage).toBeInTheDocument();
    });

    it('displays cases correctly from context', () => {
        // Mock data
        const mockCases = [
            {
                id: '1',
                patientName: 'John Doe',
                age: 30,
                gender: 'Male',
                diagnosis: 'Fever',
                medication: 'Paracetamol',
                caseDescription: 'Description for case ABC',
            },
            // Add more mock cases if needed
        ];

        // Render component with mock data from context
        render(
            <CaseProvider>
                <CasesListComponent cases={mockCases} />
            </CaseProvider>
        );

        // Check if case with ID 'ABC' is displayed correctly
        const displayedPatientName = screen.getByText('John Doe');
        // Add other assertions here
    });

});
