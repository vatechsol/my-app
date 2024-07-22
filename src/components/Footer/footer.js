import React from "react";
import Button from "../button/button";
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
        <Button val="footer" val2="green"/>
        <h3>I am a footer</h3>
      <p>© 2024 Hotel Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
