import React, { useState, useRef, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

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

  useEffect(() => {
    let isLoaded = false;
  
    const timer = setTimeout(() => {
      if (!isLoaded) {
        setIsLoading(false);
      }
    }, 2000);
  
    window.onload = () => {
      isLoaded = true;
      setIsLoading(false);
    };
  
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  const handleShowPopup = () => {
    setShowPopup(true);
  };
  const handleHidePopup = () => {
    setShowPopup(false);
  }

  return (
    <div className='page'>
    {isLoading ? (
      <Preloader />
    ) : (
      <Routes>
        <Route 
          path='/' 
          element={
            <Main 
              showPopup={showPopup} 
              handleShowPopup={handleShowPopup} 
              handleHidePopup={handleHidePopup} 
              aboutProjectRef={aboutProjectRef}
              aboutMeRef={aboutMeRef}
              techsRef={techsRef}
            />
          } 
        />
        <Route path='/movies' element={<Movies showPopup={showPopup} handleShowPopup={handleShowPopup} handleHidePopup={handleHidePopup} aboutProjectRef={aboutProjectRef} />} />
        <Route path='/saved-movies' element={<SavedMovies showPopup={showPopup} handleShowPopup={handleShowPopup} handleHidePopup={handleHidePopup} aboutProjectRef={aboutProjectRef} />} />
        <Route path='/profile' element={<Profile handleShowPopup={handleShowPopup} handleHidePopup={handleHidePopup} aboutProjectRef={aboutProjectRef} />} />
        <Route path='/signup' element={<Register aboutProjectRef={aboutProjectRef} />} />
        <Route path='/signin' element={<Login aboutProjectRef={aboutProjectRef} />} />
        <Route path='/notFound' element={<NotFound aboutProjectRef={aboutProjectRef} />} />
      </Routes>
    )}
    </div>
  );
}

export default App;
