import React, { useEffect } from 'react';

import './Footer.css';

const Footer = () => {

  const [year, setYear] = React.useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className='footer'>
      <p className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__info'>
        <p className='footer__year'>&copy; {year}</p>
        <ul className='footer__links'>
          <a href='https://practicum.yandex.ru/' target='_blank' rel='noreferrer noopener' className='footer__link'>Яндекс.Практикум</a>
          <a href='https://github.com/madwizz' target='_blank' rel='noreferrer noopener' className='footer__link'>Github</a>
        </ul>
      </div>
    </section>
  )
}

export default Footer;