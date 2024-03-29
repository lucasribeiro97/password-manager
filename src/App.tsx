import React, { useState } from 'react';

import './App.css';
import Title from './components/Title/Title';
import ListServices from './components/ListServices/ListServices';
import Form from './components/Form/Form';
import { FormProps } from './types';

function App() {
  const [showRegisterButton, setShowRegisterButton] = useState(true);
  const [services, setServices] = useState<FormProps[]>([]);

  const handleFormSubmit = (serviceInfo: FormProps) => {
    setServices([...services, serviceInfo]);
    setShowRegisterButton(true);
  };

  const handleCancel = () => {
    setShowRegisterButton(true);
  };

  const handleRemoveService = (index: number) => {
    const updatedServices = [...services];
    updatedServices.splice(index, 1);
    setServices(updatedServices);
  };

  return (
    <div>
      <Title />
      {services.length === 0 ? (
        <p>Nenhuma senha cadastrada</p>
      ) : (
        <ListServices services={ services } handleRemoveService={ handleRemoveService } />
      )}
      {showRegisterButton ? (
        <button onClick={ () => setShowRegisterButton(false) }>
          Cadastrar nova senha
        </button>
      ) : (
        <Form handleSubmit={ handleFormSubmit } handleCancel={ handleCancel } />
      )}
    </div>
  );
}

export default App;
