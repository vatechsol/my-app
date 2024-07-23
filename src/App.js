import Navbar1 from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import { useState } from "react";

function App() {

const [color,setColor]=useState(["click mne any time","about","contact","footer"])

  return (
    <div className="app">
      {console.log(color[0])}
     <Navbar1  name={color[0]}/>
     <Home  name={color[1]}/>
     <About name={color[2]}/>
     <Footer name={color[3]}/>
    </div>
  )
}

export default App;   

