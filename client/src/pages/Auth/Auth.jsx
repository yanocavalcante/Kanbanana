import React, { useState } from 'react';
import './AuthStyled.css';

const Auth = () => {
  const [isRegistro, setIsRegistro] = useState(true);

  const handleRegistroClick = () => {
    setIsRegistro(true);
  };

  const handleLoginClick = () => {
    setIsRegistro(false);
  };

  return (
    <div className="container">
      <div className={`form-container ${isRegistro ? 'registro' : 'login'}`}>
        <div className="toggle">
          <button 
            id="registro-btn" 
            className={isRegistro ? 'active' : ''} 
            onClick={handleRegistroClick}
          >
            Registro
          </button>
          <button 
            id="login-btn" 
            className={!isRegistro ? 'active' : ''} 
            onClick={handleLoginClick}
          >
            Login
          </button>
        </div>
        <form id="form-content">
          {isRegistro ? (
            <>
              <input type="text" name="nome" placeholder="Nome" />
              <input type="email" name="email" placeholder="E-mail" />
              <input type="password" name="senha" placeholder="Senha" />
              <input type="password" name="confirmacao_senha" placeholder="Confirmação de senha" />
            </>
          ) : (
            <>
              <input type="email" name="email" placeholder="E-mail" />
              <input type="password" name="senha" placeholder="Senha" />
            </>
          )}
        </form>
        <div className="entrar-checkbox-container">
          <label>
            <input type="checkbox" name={isRegistro ? 'termos' : 'manter_conectado'} />
            {isRegistro ? 'Confirmo que aceito os termos de serviço' : 'Manter-me conectado'}
          </label>
          <button className="entrar-container" type="submit">Entrar</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
