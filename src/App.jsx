import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserModalForm from './components/UserModalForm';


function App() {
  const [modalState, setModalState] = useState(false);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);

  return (
    <div>
      <Navbar />
      <UserList handleModal={setModalState} users={users} />
      {modalState
        && <UserModalForm handleModal={setModalState} setUsers={setUsers} />}
    </div>
  );
}

export default App;
