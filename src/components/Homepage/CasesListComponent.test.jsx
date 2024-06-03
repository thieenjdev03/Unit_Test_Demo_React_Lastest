import React from 'react';
import { render, screen } from '@testing-library/react';
import CasesListComponent from './CasesListComponent';

describe('CasesListComponent', () => {
  const patients = [
    { id: 1, name: 'Patient 1' },
    { id: 2, name: 'Patient 2' },
  ];
  const doctors = [
    { id: 1, name: 'Doctor 1' },
    { id: 2, name: 'Doctor 2' },
  ];
  const listUser = {
    doctors :[]
      ,
       patients : [
        { id: 1, name: 'Patient 1' },
        { id: 2, name: 'Patient 2' },
      ]
    };


  const providers = [
    { id: 1, name: 'Provider 1' },
    { id: 2, name: 'Provider 2' },
  ];
  const mss = [
    { id: 1, name: 'MSS 1' },
    { id: 2, name: 'MSS 2' },
  ];
  const props = { 
    patients: listUser?.patients,
    doctors: listUser?.doctors,
    providers: providers,
    mss: mss,
    hide: false,
  };

  test('renders select elements for each section with options', () => {
    render(<CasesListComponent {...props} />);

    const patientSelect = screen.getByRole('combobox', { name: /patient/i });
    const doctorSelect = screen.getByRole('combobox', { name: /doctor/i });
    const providerSelect = screen.getByRole('combobox', { name: /provider/i });
    const mssSelect = screen.getByRole('combobox', { name: /mss/i });

    expect(patientSelect).toBeInTheDocument();
    expect(doctorSelect).toBeInTheDocument();
    expect(providerSelect).toBeInTheDocument();
    expect(mssSelect).toBeInTheDocument();

    patients.forEach(patient => {
      expect(screen.getByText(patient.name)).toBeInTheDocument();
    });

    doctors.forEach(doctor => {
      expect(screen.getByText(Null)).toBeInTheDocument();
    });

    providers.forEach(provider => {
      expect(screen.getByText(provider.name)).toBeInTheDocument();
    });

    mss.forEach(mssItem => {
      expect(screen.getByText(mssItem.name)).toBeInTheDocument();
    });
  });
});
