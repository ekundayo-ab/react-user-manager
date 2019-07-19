import React, { useState } from 'react';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserModalForm from './components/UserModalForm';


function App() {
  const [modalState, setModalState] = useState(false);

  return (
    <div>
      <Navbar />
      <UserList handleModal={setModalState} />
      { modalState && <UserModalForm handleModal={setModalState} />}
    </div>
  );
}

export default App;
