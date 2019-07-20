import React from 'react';
import PropTypes from 'prop-types';

import './UserList.scss';
import UserCard from './UserCard';

export default function UserList({ handleModal, setUsers, users }) {
  const handleDelete = (evt, userId) => {
    // eslint-disable-next-line no-alert, no-restricted-globals
    if (!confirm('Are you sure you want to remove this user?')) {
      return;
    }

    let usersInLS = JSON.parse(localStorage.getItem('users')) || [];
    usersInLS = users.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(usersInLS));

    setUsers(usersInLS);
  };

  return (
    <div className="user-list">
      <hr />
      <button
        type="button"
        className="add btn btn-primary"
        onClick={() => handleModal(true)}
      >
        Add New User
      </button>

      <hr />
      <hr />
      <h2>All Users</h2>
      <hr />

      {
        users.map(user =>
          <UserCard key={user.id} user={user} handleDelete={handleDelete} />)
      }

    </div>
  );
}

UserList.propTypes = {
  handleModal: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};
