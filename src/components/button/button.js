import React from "react";
import './button.css';

function Button(props) {
  return (
    <button className="styled-button" >
     <h4>{props.val}</h4>
     <h4>{props.val2}</h4>
    </button>
  );
}

export default Button;
