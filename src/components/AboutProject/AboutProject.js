import React, { forwardRef } from 'react';

import './AboutProject.css';

const AboutProject = forwardRef((_,aboutProjectRef) => {
  return (
    <section className='about-project' id='about-project' ref={aboutProjectRef}>
      <h3 className='about-project__heading'>
        О проекте
      </h3>

      <ul className='about-project__row'>
        <ul className='about-project__column'>
          <li className='about-project__title'>
            Дипломный проект включал 5 этапов
          </li>
          <li className='about-project__info'>
            Составление плана, работу над бэкендом, вёрстку, 
            добавление функциональности и финальные доработки.
          </li>
        </ul>

        <ul className='about-project__column'>
          <li className='about-project__title'>
            На выполнение диплома ушло 5 недель
          </li>
          <li className='about-project__info'>
            У каждого этапа был мягкий и жёсткий дедлайн, 
            которые нужно было соблюдать, чтобы успешно защититься.
          </li>
        </ul>
      </ul>

      <ul className='about-project__progress-bar'>
        <li className='about-project__bar-item'>
          <p className='about-project__first-week'>
            1 неделя
          </p>
          <p className='about-project__work'>
            Back-end
          </p>
        </li>
        <li className='about-project__bar-item'>
          <p className='about-project__week'>
            4 недели
          </p>
          <p className='about-project__work'>
            Front-end
          </p>
        </li>
      </ul>
    </section>
  )
})

export default AboutProject;