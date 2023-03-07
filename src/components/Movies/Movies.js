import React from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import PopupMenu from '../PopupMenu/PopupMenu';

const Movies = ({handleHidePopup, handleShowPopup, showPopup, aboutProjectRef}) => {
  return (
    <section className='movies'>
      <Header handleShowPopup={handleShowPopup} aboutProjectRef={aboutProjectRef}/>
      <SearchForm/>
      <MoviesCardList/>
      <Footer/>
      {showPopup && <div className='overlay' onClick={handleHidePopup} />}
      <PopupMenu showPopup={showPopup} handleHidePopup={handleHidePopup} />
    </section>
  )
}

export default Movies;