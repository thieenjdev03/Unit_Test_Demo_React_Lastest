// CaseFilterComponent.jsx
import React, { useContext } from 'react';
import Select from 'react-select';
import { DoctorContext } from '../../Context/DoctorProvider';

const CaseFilterComponent = ({ selectedFilter, handleFilterChange }) => {
    const { doctors } = useContext(DoctorContext);

    return (
        <div style={styles.container}>
            <h4>Filter By:</h4>
            <div className="flex-r gap-4">
                <Select
                    value={selectedFilter}
                    onChange={handleFilterChange}
                    options={[
                        { value: 'patientName', label: 'Patient Name' },
                        { value: 'doctor', label: 'Doctor' },
                        // Thêm các lựa chọn khác nếu cần
                    ]}
                    styles={customSelectStyles}
                />
                {/* Hiển thị danh sách bác sĩ */}
                <Select
                    options={doctors.map(doctor => ({ value: doctor.name, label: doctor.name }))}
                    styles={customSelectStyles}
                    placeholder="Select a Doctor"
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop: '10px',
        width: '80%',
    },
};

const customSelectStyles = {
    container: (provided) => ({
        ...provided,
        width: '150px',
    }),
    control: (provided) => ({
        ...provided,
        borderRadius: '5px',
    }),
};

export default CaseFilterComponent;
