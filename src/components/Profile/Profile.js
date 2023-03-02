import React from 'react';

import Header from '../Header/Header';

import './Profile.css';

const Profile = ({aboutProjectRef, handleRefClick}) => {
  return(
    <section className='profile'>
      <Header aboutProjectRef={aboutProjectRef} handleRefClick={handleRefClick}/>
      <h1 className='profile__greet'>
        Привет, Виталий!
      </h1>
      <div className='profile__inputs'>
        <input className='profile__input profile__input_name' placeholder='Имя'/>
        <div className='profile__line'></div>
        <input className='profile__input profile__input_email' placeholder='Email'/>
      </div>
      <div className='profile__buttons'>
        <button className='profile__button profile__button_edit'>
          Редактировать
        </button>
        <button className='profile__button profile__button_signout'>
          Выйти из аккаунта
        </button>
      </div>
    </section>
  )
}

export default Profile;