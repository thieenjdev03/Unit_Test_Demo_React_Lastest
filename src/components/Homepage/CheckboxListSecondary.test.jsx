import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckboxListSecondary from './CheckboxListSecondary';

const mockUserList = [
  { id: 1, name: 'User 1', phone: '123-456-7890' },
  { id: 2, name: 'User 2', phone: '234-567-8901' },
  { id: 3, name: 'User 3', phone: '345-678-9012' },
];

describe('CheckBoxList Component', () => {
  it('renders user list', () => {
    render(<CheckboxListSecondary userList={mockUserList} onCheckedUsersChange={() => { }} />);
    mockUserList.forEach(user => {
      expect(screen.getByText(`User name: ${user.name}`)).toBeInTheDocument();
      expect(screen.getByText(`Phone Number: ${user.phone}`)).toBeInTheDocument();
    });
  });

//   it('should hide the checked users when hide button is clicked', () => {
//     let checkedUsers = [];

//     const handleCheckedUsersChange = (newCheckedUsers) => {
//       checkedUsers = newCheckedUsers;
//     };

//     // Render component with initial user list
//     render(
//       <CheckboxListSecondary userList={mockUserList} onCheckedUsersChange={handleCheckedUsersChange} />
//     );

//     // Check the first user
//     const firstUserCheckbox = screen.getByRole('checkbox', { name: /User name: User 1/i });
//     fireEvent.click(firstUserCheckbox);

//     // Simulate the hide functionality
//     const filteredUserList = mockUserList.filter(user => !checkedUsers.includes(user.id));

//     // Render component with filtered user list
//     render(
//       <CheckboxListSecondary userList={filteredUserList} onCheckedUsersChange={handleCheckedUsersChange} />
//     );

//     // Verify the first user is not rendered
//     const firstUser = screen.queryByText('User name: User 1');
//     expect(firstUser).not.toBeInTheDocument();
    

//     // Verify the other users are still rendered
//     filteredUserList.forEach(user => {
//       if (user.id !== 1) {
//         const userElement = screen.getByText(`User name: ${user.name}`);
//         expect(userElement).toBeInTheDocument();
//       }
//     });
//     expect(filteredUserList).toEqual(expectedFilteredUserList);

// });
it('should filter out checked users correctly', () => {
  let checkedUsers = [];

  const handleCheckedUsersChange = (newCheckedUsers) => {
    checkedUsers = newCheckedUsers;
  };

  // Render component with initial user list
  render(
    <CheckboxListSecondary userList={mockUserList} onCheckedUsersChange={handleCheckedUsersChange} />
  );

  // Check the first user
  const firstUserCheckbox = screen.getByRole('checkbox', { name: /User name: User 1/i });
  fireEvent.click(firstUserCheckbox);

  // Simulate the hide functionality
  const filteredUserList = mockUserList.filter(user => !checkedUsers.includes(user.id));

  // Expect filteredUserList to match mockUserList without the first user
  expect(filteredUserList).toEqual(mockUserList.filter(user => user.id !== 1));
  expect(filteredUserList).not.toEqual(mockUserList);
  render(
    <CheckboxListSecondary userList={filteredUserList} onCheckedUsersChange={handleCheckedUsersChange} />
  );
});

});
