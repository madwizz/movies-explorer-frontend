import React from 'react';

import './SearchForm.css'

import icon from '../../images/glass.svg'

function SearchForm() {
  return (
    <section className='search-form'>
      <form className='search-form__form'>
        <img className='search-form__icon' alt='Magnifying glass' src={icon}/>
        <input type='text' className='search-form__input' placeholder='Фильм'/>
        <button className='search-form__submit'>
          Найти
        </button>
        <div className='search-form__line'></div>
      </form>
      <div className='search-form__group'>
        <label class="search-form__slider">
          <input type="checkbox"/>
          <span class="search-form__slider-button"/>
        </label>
        <p className='search-form__shorts'>Короткометражки</p>
      </div>
    </section>
  )
}

export default SearchForm;