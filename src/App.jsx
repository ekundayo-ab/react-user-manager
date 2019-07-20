import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserModalForm from './components/UserModalForm';


function App() {
  const [modalState, setModalState] = useState(false);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
  const [userToEdit, setUserToEdit] = useState({});
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <Navbar />

      <UserList
        handleModal={setModalState}
        users={users}
        setUsers={setUsers}
        setUserToEdit={setUserToEdit}
        setEditMode={setEditMode}
      />

      {modalState
        && (
          <UserModalForm
            handleModal={setModalState}
            setUsers={setUsers}
            userToEdit={userToEdit}
            editMode={editMode}
            setEditMode={setEditMode}
          />
        )}
    </div>
  );
}

export default App;
