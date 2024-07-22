import React from "react";
import { useState } from "react";  
import Button from "../button/button";
import './Home.css';

function Home() {

  const [data,setData]=useState("Vikash Rooms");

  const callMe=()=>{
    setData("Dubeys Rooms ")
  }


  return (
    <div className="rooms">
      
        <h3>I am a Home</h3>
        <Button val="Home" val2="green"/>
      <h2>{data}</h2>
      <button onClick={callMe}>Click Me</button>
      <div className="room">
        <h3>Deluxe Room</h3>
        <p>Description of the deluxe room.</p>
      </div>
      <div className="room">
        <h3>Suite</h3>
        <p>Description of the suite.</p>
      </div>
      <div className="room">
        <h3>Standard Room</h3>
        <p>Description of the standard room.</p>
      </div>
    </div>
  );
}

export default Home;
