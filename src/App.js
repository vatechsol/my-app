import Navbar1 from "./components/Navbar/navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";

function App() {
  return (
    <div className="app">
     <Navbar1  name="Nav"/>
     <Home/>
     <About/>
     <Footer/>
    </div>
  )
}

export default App;   

