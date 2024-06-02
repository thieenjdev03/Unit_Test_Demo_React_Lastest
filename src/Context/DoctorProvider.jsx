
// DoctorContext.js
import React, { createContext, useState } from 'react';

const DoctorContext = createContext();

const DoctorProvider = ({ children }) => {
    // Dữ liệu mẫu về bác sĩ
    const initialDoctors = [
        { id: 1, name: 'Dr. John Smith' },
        { id: 2, name: 'Dr. Jane Doe' },
        { id: 3, name: 'Dr. Michael Johnson' },
        // Thêm dữ liệu khác nếu cần
    ];

    const [doctors, setDoctors] = useState(initialDoctors);
    const [selectedDoctor, setSelectedDoctor] = useState(null);

    return (
        <DoctorContext.Provider value={{ doctors, selectedDoctor, setSelectedDoctor }}>
            {children}
        </DoctorContext.Provider>
    );
};

export { DoctorProvider, DoctorContext };
