import React from "react";
import { useState } from "react";  
import Button from "../button/button";


function Home(props) {

  
  return (
    <div className="rooms">
      
      
        <Button val={props.name}/>
     
    </div>
  );
}

export default Home;
