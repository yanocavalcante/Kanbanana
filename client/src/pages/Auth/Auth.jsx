import React, { useState } from 'react';
import './AuthStyled.css';
import { Input } from '../../components/Input/Input'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod'
import { signinSchema } from '../../schemas/signinSchema';
import { signupSchema } from '../../schemas/signupSchema';
import { ErrorSpan } from './ErrorSpanStyled';
import { signup } from '../../services/userServices'

const Auth = () => {
  const {
    register: registerSignup, 
    handleSubmit: handleSubmitSignup,
    reset: resetSignup,
    formState: {errors: errorsSignup}
  } = useForm({resolver: zodResolver(signupSchema)})
  
  const {
    register: registerSignin, 
    handleSubmit: handleSubmitSignin,
    reset: resetSignin,
    formState: {errors: errorsSignin}
  } = useForm({resolver: zodResolver(signinSchema)})
  const navigate = useNavigate()

  function signinHandleSubmit(data){
    console.log(data)
  }

  async function signupHandleSubmit(data){
    try {
      const response = await signup(data)
      console.log(response)
    } catch (error){
      console.log(error)
    }
  }

  const [isRegistro, setIsRegistro] = useState(true);

  const handleRegistroClick = () => {
    setIsRegistro(true);
    resetSignup()
  };

  const handleLoginClick = () => {
    setIsRegistro(false);
    resetSignin()
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
        <form id="form-content" onSubmit={isRegistro ?  handleSubmitSignup(signupHandleSubmit): handleSubmitSignin(signinHandleSubmit)}>
          {isRegistro ? (
            <>
              <Input type="text" name="name" placeholder="Nome" register={registerSignup}/>
              {errorsSignup.name && <ErrorSpan> {errorsSignup.name.message} </ ErrorSpan>}
              <Input type="email" name="email" placeholder="E-mail" register={registerSignup}/>
              {errorsSignup.email && (<ErrorSpan> {errorsSignup.email.message} </ ErrorSpan>)}
              <Input type="password" name="password" placeholder="Senha" register={registerSignup}/>
              {errorsSignup.password && <ErrorSpan> {errorsSignup.password.message} </ ErrorSpan>}
              <Input type="password" name="confirmPassword" placeholder="Confirmação de senha" register={registerSignup}/>
              {errorsSignup.confirmPassword && <ErrorSpan> {errorsSignup.confirmPassword.message} </ ErrorSpan>}
            </>
          ) : (
            <>
              <Input type="email" name="email" placeholder="E-mail" register={registerSignin}/>
              {errorsSignin.email && (<ErrorSpan> {errorsSignin.email.message} </ ErrorSpan>)}
              <Input type="password" name="password" placeholder="Senha" register={registerSignin}/>
              {errorsSignin.password && <ErrorSpan> {errorsSignin.password.message} </ ErrorSpan>}
            </>
          )}
          <div className="entrar-checkbox-container">
            <label>
              <input type="checkbox" name={isRegistro ? 'termos' : 'manter_conectado'} />
              {isRegistro ? 'Confirmo que aceito os termos de serviço' : 'Manter-me conectado'}
            </label>
            <button className="entrar-container" type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
