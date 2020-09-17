import React from 'react';

import { Container, Navigation, DropboxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  function handleToggle() {
    if (window.toggleActiveMenu) window.toggleActiveMenu();
  }

  return (
    <Container>

      <Navigation>
        <h1>
          <DropboxLogo />
          <span>Dropbox</span>
        </h1>

        <button className="active--close" onClick={handleToggle} >X</button>
      </Navigation>

      <Form>
        <span className="title" >Registre-se</span>
        <span className="subtitle">preencha o formulário abaixo</span>

        <input type="text" placeholder="Nome" />
        <input type="tex" placeholder="Sobrenome" />
        <input type="email" placeholder="E-Mail" />
        <input type="password" placeholder="Senha" />

        <button type='submit'>Prosseguir</button>

        <span className="terms" >
          Esta pagina esta sujeita a Politica de privacidade e os Termos de serviço
        </span>
      </Form>
    </Container>
  );
};

export default MenuForm;
