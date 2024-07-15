import React from 'react';
import './Hero.css';
//import hero from './hero.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
      <div className='top'>
      <h1>Medium length display headline</h1>
      <p>Separated they live in Bookmarks right at the coast of the famous Semantics, large language</p>
      </div>
      <div className='bottom'>
      <button className='button'>Read</button>
      <p>5,000 people like you have purchased this product!</p>
      </div>
      </div>
      <div className='img'>
      {/*<img src={hero} alt="Image" className="hero-img" />*/}
      </div>
    </section>
  );
}

export default Hero;
