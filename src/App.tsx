import { useState } from 'react';

import './App.css';
import Title from './components/Title/Title';
import Form from './components/Form/Form';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showRegisterButton, setShowRegisterButton] = useState(true);

  const handleClick = () => {
    setShowForm(true);
    setShowRegisterButton(false);
  };

  const handleCancel = () => {
    setShowRegisterButton(true);
  };

  return (
    <div>
      <Title />
      {showForm && !showRegisterButton
        ? <Form handleCancel={ handleCancel } />
        : <button onClick={ handleClick }>Cadastrar nova senha</button>}
    </div>
  );
}

export default App;
