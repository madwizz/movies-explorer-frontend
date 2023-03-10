import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return(
    <section className='movies-list'>
      <ul className='movies-list__grid'>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
        <MoviesCard/>
      </ul>
      <div className='movies-list__button-wrap'>
        <button className='movies-list__button'>
          Ещё
        </button>
      </div>
    </section>
  )
}

export default MoviesCardList;