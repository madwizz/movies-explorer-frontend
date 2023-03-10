import React from 'react';

import './AboutMe.css';

import profilePic from '../../images/profilePic.svg';

const AboutMe = ({aboutMeRef}) => {
  return (
    <section className='about-me' id='about-me' ref={aboutMeRef}>
      <h3 className='about-me__heading'>
        Студент
      </h3>
      <div className='about-me__grid'>
        <ul className='about-me__bio'>
          <li className='about-me__name'>
            Виталий
          </li>
          <li className='about-me__job'>
            Фронтенд-разработчик, 30 лет
          </li>
          <li className='about-me__summary'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С
            2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
            веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </li>
          <a href='https://github.com/madwizz' target='_blank' rel='noreferrer noopener' className='about-me__github'>
            Github
          </a>
        </ul>
        <img className='about-me__photo' alt='Profile pic' src={profilePic}/>
      </div>
    </section>
  )
}

export default AboutMe;