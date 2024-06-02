// CaseContext.js
import React, { createContext, useState } from 'react';

const CaseContext = createContext();

const CaseProvider = ({ children }) => {
    // Dữ liệu mẫu về cases
    const initialCases = [
        {
            id: '1',
            patientName: 'John Doe',
            age: 30,
            gender: 'Male',
            diagnosis: 'Fever',
            medication: 'Paracetamol',
            caseDescription: 'Description for case ABC',
        },
        {
            id: '2',
            patientName: 'John Doe',
            age: 30,
            gender: 'Male',
            diagnosis: 'Fever',
            medication: 'Paracetamol',
            caseDescription: 'Description for case ABC',
        },
        // Thêm dữ liệu khác nếu cần
    ];

    const [cases, setCases] = useState(initialCases);

    return (
        <CaseContext.Provider value={{ cases }}>
            {children}
        </CaseContext.Provider>
    );
};

export { CaseProvider, CaseContext };
