import React from 'react';
import { Homebox } from '../Homebox/Homebox';
import './Homepage.css';

const Homepage = () => {
  return (
    <section className="container-fluid">
      <div className="homeContainer">
        <section className="container">
          <div className="hero_homepage">
            <span>Welcome to Bollaram studio</span>
            <h2>Find your dream </h2>
            <h1>
              <span>Full stack & ReactJs</span> Profile
            </h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <button>Get Started</button>
          </div>
        </section>
      </div>
      <section className="box-container">
        <h2>Profile Details</h2>
        <Homebox />
        <Homebox />
        <Homebox />
      </section>
    </section>
  );
};

export default Homepage;
