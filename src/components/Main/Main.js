import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import './Main.css';

import Promo from '../Promo/Promo'
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import PopupMenu from '../PopupMenu/PopupMenu';

import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const Main = ({handleHidePopup, handleShowPopup, showPopup, aboutProjectRef, techsRef, aboutMeRef}) => {

  const location = useLocation();

  useEffect(() => {
    const sections = [
      { hash: '#about-project', ref: aboutProjectRef },
      { hash: '#about-me', ref: aboutMeRef },
      { hash: '#techs', ref: techsRef }
    ];

    const matchingSection = sections.find((section) => section.hash === location.hash);
    if (matchingSection) {
      const matchingSectionRef = matchingSection.ref.current;
      if (matchingSectionRef) {
        matchingSectionRef.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location, aboutMeRef, aboutProjectRef, techsRef]);

  return (
    <main className='main'>
      <Header handleShowPopup={handleShowPopup} aboutProjectRef={aboutProjectRef}/>
      <Promo/>
      <NavTab aboutProjectRef={aboutProjectRef} techsRef={techsRef} aboutMeRef={aboutMeRef}/>
      <AboutProject id='about-project' aboutProjectRef={aboutProjectRef}/>
      <Techs id='techs' techsRef={techsRef}/>
      <AboutMe id='about-me' aboutMeRef={aboutMeRef}/>
      <Portfolio/>
      <Footer/>
      {showPopup && <div className='overlay' onClick={handleHidePopup} />}
      <PopupMenu showPopup={showPopup} handleHidePopup={handleHidePopup} />
    </main>
  )
}

export default Main;