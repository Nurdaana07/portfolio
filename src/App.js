import React, { useState } from 'react';
import './App.css';
import Footer from './Components/Footer';
import raidenImage from '../src/assets/Raiden-Shogun.png'; // Импорт изображения

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav>
        <div className="logo">Portfolio</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="#">Message</a></li>
        </ul>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Nurdaana</h1>
            <p>
              She is a full-stack developer with a designer mindset
              (born to be an animator, forced to be an IT programmer)
            </p>
          </div>
          <div className="hero-image">
            <img
              src={raidenImage} 
              alt="Raiden Shogun"
              className="image"
              onClick={openModal} 
            />
          </div>
        </section>

        {/* Модальное окно */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Nurdaana Omurzakova</h2>
              <p>
                I am not experienced Software Engineer with over seven years in the industry and a Founder. I don't know what else to write!
              </p>
              <button className="close-button" onClick={closeModal}>Close</button>
            </div>
          </div>
        )}

        <section className="recent-search">
          <h2>Recent Search</h2>
          <ul>
            <li><a href="#">Nurdaana</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Crush list</a></li>
          </ul>
        </section>

        <div className="extra-links">
          <div className="link-box">Me</div>
          <div className="link-box">Group</div>
          <div className="link-box">Not Me</div>
        </div>
      </main>
    </>
  );
}

export default App;
