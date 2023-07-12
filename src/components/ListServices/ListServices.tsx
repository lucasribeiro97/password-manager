import React from 'react';

type ListServicesProps = {
  services: Array<{
    service: string;
    login: string;
    password: string;
    url: string;
  }>;
};

function ListServices({ services }: ListServicesProps) {
  return (
    <div>
      {services.map((service, index) => (
        <div key={ index }>
          <a href={ service.url }>{service.service}</a>
          <p>
            Login:
            {' '}
            {service.login}
          </p>
          <p>
            Senha:
            {' '}
            {service.password}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ListServices;
