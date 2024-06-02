// SearchComponent.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { FaFilter } from 'react-icons/fa';
import { debounce } from 'lodash';
import CaseFilterComponent from './CaseFilterComponent';
import CasesListComponent from './CasesListComponent';
import { DoctorProvider } from '../../Context/DoctorProvider';
const generateInitialCases = (numCases) => {
    const cases = [];
    for (let i = 1; i <= numCases; i++) {
        const patientName = `Patient ${i}`;
        const age = Math.floor(Math.random() * 100) + 1; // Random age between 1 and 100
        const gender = Math.random() < 0.5 ? 'Male' : 'Female'; // Randomly select gender
        const diagnoses = ['Fever', 'Cough', 'Headache', 'Sore throat', 'Stomachache'];
        const diagnosis = diagnoses[Math.floor(Math.random() * diagnoses.length)]; // Randomly select diagnosis
        const medications = ['Paracetamol', 'Cough Syrup', 'Ibuprofen', 'Antibiotics', 'Antacids'];
        const medication = medications[Math.floor(Math.random() * medications.length)]; // Randomly select medication
        const caseDescription = `Description for case ${i}`;

        cases.push({
            id: i,
            patientName,
            age,
            gender,
            diagnosis,
            medication,
            caseDescription,
        });
    }
    return cases;
};
const initialCases = generateInitialCases(10); // Tạo 50 ca bệnh mẫu

const SearchComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [filteredCases, setFilteredCases] = useState(initialCases);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const performSearch = (query) => {
        const lowerCaseQuery = query.toLowerCase();
        const newFilteredCases = initialCases.filter((caseItem) =>
            caseItem.patientName.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredCases(newFilteredCases);
    };

    const debouncedSearch = useCallback(debounce(performSearch, 1000), []);

    useEffect(() => {
        debouncedSearch(searchQuery);
        // Cleanup function to cancel debounced function call on component unmount or query change
        return () => {
            debouncedSearch.cancel();
        };
    }, [searchQuery, debouncedSearch]);

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    return (
        <DoctorProvider>
            <div style={styles.container}>
                <div style={styles.searchBox}>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder="Search by patient name"
                        style={styles.input}
                    />
                    <button data-testid='btn-filter' onClick={toggleFilters} style={styles.filterButton}>
                        <FaFilter />
                    </button>
                </div>
                {showFilters && <CaseFilterComponent />}
                <CasesListComponent cases={filteredCases} />
            </div>
        </DoctorProvider>

    );
};
const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    searchBox: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '10px',
    },
    input: {
        flex: 1,
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginLeft: '10px',
    },
    button: {
        backgroundColor: '#007bff',
        border: 'none',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '10px',
    },
    filterButton: {
        backgroundColor: '#28a745',
        border: 'none',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '10px',
    },
};

export default SearchComponent;
