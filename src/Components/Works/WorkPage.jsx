import React from 'react';
import CardsPage from './CardPage/CardsPage';
import'./WorkPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const WorkPage = () => {
  return (
    <div className="Page-Work-Container">
      <div className="Page-Work">
        <div className="Page-Work-Head">
        <span className="Page-Text">Coding Projects<span>.</span></span><br />
        <span className="Page-Text-description">Here are some of the projects I've worked on, utilizing a variety of technologies and frameworks.</span>
      </div>
      <div className="Page-Cards">
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
        <CardsPage />
      </div>
      
      </div>
    </div>
  );
}

export default WorkPage;
