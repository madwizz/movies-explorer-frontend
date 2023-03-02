import React from 'react';

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

const Main = ({handleHidePopup, handleShowPopup, showPopup, aboutProjectRef, techsRef, aboutMeRef, handleRefClick}) => {

  return (
    <main className='main'>
      <Header handleShowPopup={handleShowPopup} aboutProjectRef={aboutProjectRef} handleRefClick={handleRefClick}/>
      <Promo/>
      <NavTab aboutProjectRef={aboutProjectRef} techsRef={techsRef} aboutMeRef={aboutMeRef} handleRefClick={handleRefClick}/>
      <AboutProject id='about-project' aboutProjectRef={aboutProjectRef}/>
      <Techs id='techs' ref={techsRef}/>
      <AboutMe id='about-me' ref={aboutMeRef}/>
      <Portfolio/>
      <Footer/>
      {showPopup && <div className='overlay' onClick={handleHidePopup} />}
      <PopupMenu showPopup={showPopup} handleHidePopup={handleHidePopup} />
    </main>
  )
}

export default Main;