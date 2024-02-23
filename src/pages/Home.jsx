import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Main from '../components/Main'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const notify = () => toast.success("Logged in successfully!", {
    position: "bottom-center"
  });

  const handleAuthenticated = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
    setModalIsOpen(false);
    notify();
  }

  const openModal = () => {
    setModalIsOpen(true);
    document.body.style.overflow = 'hidden'; // prevent scrolling
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.style.overflow = 'auto'; // prevent scrolling
  };
    
  return (
    <div>
        <ToastContainer/>
        <Header
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
          isAuthenticated={isAuthenticated}
          handleAuthenticated={handleAuthenticated}
          openModal={openModal}
          closeModal={closeModal}
        />
        <Hero/>
        <Main isAuthenticated={isAuthenticated} />
    </div>
  )
}

export default Home