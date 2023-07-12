import React, { useState } from 'react';
import './Form.css';
import { FormProps } from '../../types';

type Props = {
  handleSubmit: (serviceInfo: FormProps) => void;
  handleCancel: () => void;
};

const INITIAL_STATE = {
  service: '',
  login: '',
  password: '',
  url: '',
};

export default function Form({ handleSubmit, handleCancel }: Props) {
  const [formInfo, setFormInfo] = useState<FormProps>(INITIAL_STATE);
  const { service, login, password, url } = formInfo;

  function handleChange(event: React.ChangeEvent<HTMLInputElement
  | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormInfo((prevFormInfo) => ({
      ...prevFormInfo,
      [name]: value,
    }));
  }

  function isFormValid() {
    if (!service || !login || !password || !url) {
      return false;
    }

    // Verificar o tamanho da senha
    if (password.length < 8 || password.length > 16) {
      return false;
    }

    // Verificar se a senha possui letras e números
    if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
      return false;
    }

    // Verificar se a senha possui algum caractere especial
    return !(!/[!@#$%^&*]/.test(password));
  }

  function getPasswordValidityClass(valid: boolean) {
    return valid ? 'valid-password-check' : 'invalid-password-check';
  }

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    if (isFormValid()) {
      handleSubmit(formInfo);
      setFormInfo(INITIAL_STATE);
    }
  };

  return (
    <form onSubmit={ handleSubmitForm }>
      <label>
        Nome do serviço
        <input
          type="text"
          name="service"
          id="service"
          required
          value={ service }
          onChange={ handleChange }
        />
      </label>
      <label>
        Login
        <input
          type="text"
          name="login"
          id="login"
          required
          value={ login }
          onChange={ handleChange }
        />
      </label>
      <label>
        Senha
        <input
          type="password"
          name="password"
          id="password"
          required
          value={ password }
          onChange={ handleChange }
        />
      </label>
      <label>
        URL
        <input
          type="text"
          name="url"
          id="url"
          required
          value={ url }
          onChange={ handleChange }
        />
      </label>
      <div>
        <p className={ getPasswordValidityClass(password.length >= 8) }>
          Possuir 8 ou mais caracteres
        </p>
        <p className={ getPasswordValidityClass(password.length <= 16) }>
          Possuir até 16 caracteres
        </p>
        <p
          className={ getPasswordValidityClass(
            /[a-zA-Z]/.test(password) && /[0-9]/.test(password),
          ) }
        >
          Possuir letras e números
        </p>
        <p className={ getPasswordValidityClass(/[!@#$%^&*]/.test(password)) }>
          Possuir algum caractere especial
        </p>
      </div>
      <button disabled={ !isFormValid() }>Cadastrar</button>
      <button type="button" onClick={ handleCancel }>
        Cancelar
      </button>
    </form>
  );
}
