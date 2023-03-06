import React from 'react';

import './Techs.css';

const Techs = ({techsRef}) => {
  return (
    <section className='techs' id='techs' ref={techsRef}>
      <h3 className='techs__heading'>
        Технологии
      </h3>
      <h2 className='techs__title'>
        7 технологий
      </h2>
      <p className='techs__text'>
        На курсе веб-разработки мы освоили технологии, 
        которые применили <br/> в дипломном проекте.
      </p>
      <ul className='techs__list'>
        <li className='techs__item'>
          <p className='techs__p'>HTML</p>
        </li>
        <li className='techs__item'>
          <p className='techs__p'>CSS</p>
        </li>
        <li className='techs__item'>
          <p className='techs__p'>JS</p>
        </li>
        <li className='techs__item'>
          <p className='techs__p'>React</p>
        </li>
        <li className='techs__item'>
          <p className='techs__p'>Git</p>
        </li>
        <li className='techs__item'>
          <p className='techs__p'>Express.js</p>
        </li>
        <li className='techs__item'>
          <p className='techs__p'>mongoDB</p>
        </li>
      </ul>
    </section>
  )
}

export default Techs;