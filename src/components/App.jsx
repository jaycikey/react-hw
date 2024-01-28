import { useState } from 'react';
import { Filter } from './Filter';
import { Users } from './Users';
import { UserForm } from './UserForm';

export const App = () => {
  const [nameFilter, setnameFilter] = useState('');
  const [users, setUsers] = useState([
    { username: 'Jacob', id: 10001 },
    { username: 'Mango', id: 10002 },
    { username: 'Elena', id: 10003 },
    { username: 'Orlando', id: 10004 },
    { username: 'Gimli', id: 10005 },
  ]);

  const deleteUser = userId => {
    setUsers(prevUsers => {
      return prevUsers.filter(user => user.id !== userId);
    });
  };

  const addUser = newUser => {
    setUsers(prevUser => {
      return [
        ...prevUser,
        {
          username: newUser,
          id: Date.now(),
        },
      ];
    });
  };

  const visibalUser = users.filter(user =>
    user.username.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <>
      <UserForm onAdd={addUser} />
      <hr />
      <Filter value={nameFilter} onChange={setnameFilter} />
      <Users items={visibalUser} onDelete={deleteUser} />
    </>
  );
};
