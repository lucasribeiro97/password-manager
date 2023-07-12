import React from 'react';

type ListServicesProps = {
  services: Array<{
    service: string;
    login: string;
    password: string;
    url: string;
  }>;
  handleRemoveService: (index: number) => void;
};

function ListServices({ services, handleRemoveService }: ListServicesProps) {
  const handleRemoveClick = (index: number) => {
    handleRemoveService(index);
  };

  return (
    <div>
      {services.map((service, index) => (
        <div key={ index }>
          <a href={ service.url }>{service.service}</a>
          <p>
            Login:
            <span>
              {service.login}
            </span>
          </p>
          <p>
            Senha:
            {' '}
            {service.password}
          </p>
          <button
            onClick={ () => handleRemoveClick(index) }
            data-testid="remove-btn"
          >
            Remover
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListServices;
