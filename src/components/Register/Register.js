import React from 'react';

import { Link } from 'react-router-dom';

import './Register.css';

import headerLogo from '../../images/logo.svg';

const Register = () => {

  return(
    <section className='register'>
      <Link to='/#about-project' className='register__about-link'>
        <img className='register__logo' src={headerLogo} alt='logo'/>
      </Link>
      <h2 className='register__greet'>
        Добро пожаловать!
      </h2>
      <div className='register__inputs-group'>
        <div className='register__input-group'>
          <div className='register__input-title'>
            Имя
          </div>
          <input className='register__input' placeholder='Виталий'/>
        </div>
        <div className='register__input-group'>
          <div className='register__input-title'>
            E-mail
          </div>
          <input className='register__input' placeholder='pochta@yandex.ru'/>
        </div>
        <div className='register__input-group'>
          <div className='register__input-title'>
            Пароль
          </div>
          <input className='register__input' placeholder='Password'/>
        </div>
      </div>
      <button className='register__button'>
        Зарегестрироваться
      </button>
      <div className='register__signin-box'>
        <p className='register__p'>
          Уже зарегестрированы?
        </p>
        <Link to='/signin' className='register__signin-link'>
          Войти
        </Link>
      </div>
    </section>
  )
}

export default Register;