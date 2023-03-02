import React from 'react';

import { Link } from 'react-router-dom';

import './Login.css';

import headerLogo from '../../images/logo.svg';

function Login({handleRefClick, aboutProjectRef}) {
  return(
    <section className='login'>
      <Link to='/#about-project' onClick={() => handleRefClick(aboutProjectRef)} className='login__about-link'>
        <img className='login__logo' src={headerLogo} alt='logo'/>
      </Link>
      <h2 className='login__greet'>
        Рады видеть!
      </h2>
      <div className='login__inputs-group'>
        <div className='login__input-group'>
          <div className='login__input-title'>
            E-mail
          </div>
          <input className='login__input' placeholder='pochta@yandex.ru'/>
        </div>
        <div className='login__input-group'>
          <div className='login__input-title'>
            Password
          </div>
          <input className='login__input' placeholder='password'/>
        </div>
      </div>
      <button className='login__button'>
        Войти
      </button>
      <div className='login__signin-box'>
        <p className='login__p'>
          Еще не зарегестрированы?
        </p>
        <Link to='/signup' className='login__signin-link'>
          Регистрация
        </Link>
      </div>
    </section>
  )
}

export default Login;