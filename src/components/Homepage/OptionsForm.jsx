import React from 'react';

const OptionsForm = ({ label, options }) => {
    return (
        <div>
            <label>{label}</label>
            <select>
                {options.map(option => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}
            </select>
        </div>
    );
};

export default OptionsForm;
