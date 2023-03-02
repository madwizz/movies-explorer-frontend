import React from 'react';

import './Portfolio.css'

import arrowPic from '../../images/arrow.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <p className='about-me__portfolio'>Портфолио</p>
      <ul className='about-me__links'>
        <li className='about-me___link'>
          <a href='https://madwizz.github.io/how-to-learn/' target='_blank' rel='noreferrer noopener' className='about-me__link_text'>Статичный сайт</a>
          <a href='https://madwizz.github.io/how-to-learn/' target='_blank' rel='noreferrer noopener'>
            <img className='about-me__link_arrow' src={arrowPic} alt='Arrow pic'/>
          </a>
        </li>
        <li className='about-me___link'>
          <a href='https://madwizz.github.io/russian-travel/' target='_blank' rel='noreferrer noopener' className='about-me__link_text'>Адаптивный сайт</a>
          <a href='https://madwizz.github.io/russian-travel/' target='_blank' rel='noreferrer noopener'>
            <img className='about-me__link-arrow' src={arrowPic} alt='Arrow pic'/>
          </a>
        </li>
        <li className='about-me___link'>
          <a href='https://madwizz.github.io/mesto/' target='_blank' rel='noreferrer noopener' className='about-me__link_text'>Одностраничное приложение</a>
          <a href to='https://madwizz.github.io/mesto/' target='_blank' rel='noreferrer noopener'>
            <img className='about-me__link-arrow' src={arrowPic} alt='Arrow pic'/>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;