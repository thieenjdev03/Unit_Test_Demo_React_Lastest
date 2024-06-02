import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxListSecondary from './CheckboxListSecondary';

const mockUserList =
  [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }];
describe('CheckBoxList Component', () => {
  it('renders user list', () => {
    render(<CheckboxListSecondary userList={mockUserList} onCheckedUsersChange={() => { }} />);
    mockUserList.forEach(user => {
      expect(screen.getByText(`User name: ${user.name}`)).toBeInTheDocument();
      expect(screen.getByText(`Phone Number: ${user.phone}`)).toBeInTheDocument();
    });
  });
})
