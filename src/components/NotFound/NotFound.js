import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';

function NotFound() {
  return(
    <section className='not-found'>
      <div className='not-found__group'>
        <h1 className='not-found__number'>
          404
        </h1>
        <p className='not-found__p'>
          Страница не найдена
        </p>
      </div>
      <Link to='/' className='not-found__link'>
        Назад
      </Link>
    </section>
  )
}

export default NotFound;