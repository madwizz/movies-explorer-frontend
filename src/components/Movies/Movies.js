import React from 'react';

import './Movies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import PopupMenu from '../PopupMenu/PopupMenu';

function Movies({handleHidePopup, handleShowPopup, showPopup, aboutProjectRef, handleRefClick}) {
  return (
    <section className='movies'>
      <Header handleShowPopup={handleShowPopup} aboutProjectRef={aboutProjectRef} handleRefClick={handleRefClick}/>
      <SearchForm/>
      <MoviesCardList/>
      <Footer/>
      {showPopup && <div className='overlay' onClick={handleHidePopup} />}
      <PopupMenu showPopup={showPopup} handleHidePopup={handleHidePopup} />
    </section>
  )
}

export default Movies;