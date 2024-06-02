// CasesListComponent.jsx
import React from 'react';
import { CaseProvider } from '../../Context/CaseProvider';

const CasesListComponent = ({ cases }) => {
    return (
        <CaseProvider>
            <div style={styles.casesContainer}>
                <h4>Cases List</h4>
                {cases.length > 0 ? (
                    cases.map((caseItem) => (
                        <div data-testid="case-item" key={caseItem.id} style={styles.caseItem}>
                            <h5>{caseItem.patientName}</h5>
                            <p>Age: {caseItem.age}</p>
                            <p>Gender: {caseItem.gender}</p>
                            <p>Diagnosis: {caseItem.diagnosis}</p>
                            <p>Medication: {caseItem.medication}</p>
                            <p>{caseItem.caseDescription}</p>
                        </div>
                    ))
                ) : (
                    <p>No cases found</p>
                )}
            </div>
        </CaseProvider>

    );
};

const styles = {
    casesContainer: {
        backgroundColor: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginTop: '10px',
        width: '80%',
    },
    caseItem: {
        borderBottom: '1px solid #ccc',
        padding: '10px 0',
    },
};

export default CasesListComponent;
