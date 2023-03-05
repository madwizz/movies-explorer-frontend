import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab({aboutProjectRef, techsRef, aboutMeRef}) {

  return (
    <section className='nav-tab'>
      <ul className='nav-tab__list'>
        <div className='nav-tab__item'>
          <Link to='#about-project' aboutProjectRef={aboutProjectRef} className='nav-tab__link'>О проекте</Link>
        </div>
        <div className='nav-tab__item'>
          <Link to='#techs' techsRef={techsRef} className='nav-tab__link'>Технологии</Link>
        </div>
        <div className='nav-tab__item'>
          <Link to='#about-me' aboutMeRef={aboutMeRef} className='nav-tab__link' href='#student'>Студент</Link>
        </div>
      </ul>
    </section>
  )
}

export default NavTab;