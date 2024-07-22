import React from "react";
import Button from "../button/button";
import './about.css';

function About() {
  return (
    <div className="hero">
        <h3>I am a About</h3>
        <Button val="About" val2="white"/>
      <h2>Welcome to Our Hotel</h2>
      <p>Experience luxury and comfort</p>
    </div>
  );
}

export default About;
