import React, { useState, useRef, useEffect } from 'react';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Main from '../Main/Main'
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';

const App = () => {

  const [showPopup, setShowPopup] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const aboutProjectRef = useRef(null);
  const techsRef = useRef(null);
  const aboutMeRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    const aboutProjectId = document.getElementById('about-project');
    aboutProjectRef.current = aboutProjectId;

    let isLoaded = false;
  
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setIsLoading(false);
      }
    }, 1000);
  
    window.onload = () => {
      isLoaded = true;
      setIsLoading(false);
    };
  
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isLoading && location.state?.scrollToComponent) {
      aboutProjectRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [isLoading, location.state]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', {state: { scrollToComponent: true}});
  };

  const handleRefClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth'
    });
    // ref.current.focus();
  }
  
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  const handleHidePopup = () => {
    setShowPopup(false);
  }

  return (
    <>
    {isLoading ? (
      <Preloader />
    ) : (
      <Routes>
        <Route path='/' element={<Main 
        showPopup={showPopup} 
        handleShowPopup={handleShowPopup} 
        handleHidePopup={handleHidePopup} 
        handleRefClick={handleRefClick}
        aboutProjectRef={aboutProjectRef}
        aboutMeRef={aboutMeRef}
        techsRef={techsRef}
        />} />
        <Route path='/movies' element={<Movies showPopup={showPopup} handleShowPopup={handleShowPopup} handleHidePopup={handleHidePopup} aboutProjectRef={aboutProjectRef}/>} />
        <Route path='/saved-movies' element={<SavedMovies showPopup={showPopup} handleShowPopup={handleShowPopup} handleHidePopup={handleHidePopup} aboutProjectRef={aboutProjectRef}/>} />
        <Route path='/profile' element={<Profile handleShowPopup={handleShowPopup} handleHidePopup={handleHidePopup} aboutProjectRef={aboutProjectRef} />} />
        <Route path='/signup' element={<Register handleRefClick={handleRefClick} handleClick={handleClick} aboutProjectRef={aboutProjectRef}/>} />
        <Route path='/signin' element={<Login handleRefClick={handleRefClick} aboutProjectRef={aboutProjectRef}/>} />
        <Route path='/notFound' element={<NotFound/>} />
      </Routes>
    )}
    </>
  );
}

export default App;
