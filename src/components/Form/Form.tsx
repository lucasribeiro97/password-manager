import './Form.css';

type Props = {
  handleCancel: () => void;
};

export default function Form({ handleCancel }: Props) {
  return (
    <div>
      <label>
        Nome do serviço
        <input type="text" name="service" id="service" />
      </label>
      <label>
        Login
        <input type="text" name="login" id="login" />
      </label>
      <label>
        Senha
        <input type="password" name="password" id="password" />
      </label>
      <label>
        URL
        <input type="text" name="link" id="link" />
      </label>
      <button>Cadastrar</button>
      <button onClick={ handleCancel }>Cancelar</button>
    </div>
  );
}
