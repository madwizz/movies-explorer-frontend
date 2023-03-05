import React from 'react';

import './Portfolio.css'

import arrowPic from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <p className='about-me__portfolio'>Портфолио</p>
      <div className='about-me__links'>
        <div className='about-me___link'>
          <a href='https://madwizz.github.io/how-to-learn/' target='_blank' rel='noreferrer noopener' className='about-me__link_text'>Статичный сайт</a>
          <a href='https://madwizz.github.io/how-to-learn/' target='_blank' rel='noreferrer noopener'>
            <img className='about-me__link-arrow' src={arrowPic} alt='Arrow pic'/>
          </a>
        </div>
        <div className='about-me___link'>
          <a href='https://madwizz.github.io/russian-travel/' target='_blank' rel='noreferrer noopener' className='about-me__link_text'>Адаптивный сайт</a>
          <a href='https://madwizz.github.io/russian-travel/' target='_blank' rel='noreferrer noopener'>
            <img className='about-me__link-arrow' src={arrowPic} alt='Arrow pic'/>
          </a>
        </div>
        <div className='about-me___link'>
          <a href='https://madwizz.github.io/mesto/' target='_blank' rel='noreferrer noopener' className='about-me__link_text'>Одностраничное приложение</a>
          <a href to='https://madwizz.github.io/mesto/' target='_blank' rel='noreferrer noopener'>
            <img className='about-me__link-arrow' src={arrowPic} alt='Arrow pic'/>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;