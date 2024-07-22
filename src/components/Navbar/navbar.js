
import './navbar.css';
import Button from '../button/button';

const Navbar1=(props)=> {
  return (
    <nav className="navbar">
      <Button val="Booking" val2="red"/>
        <h3>I am a {props.name}</h3>
      <h1>Hotel Name</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Rooms</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar1;
