import { Routes, Route } from "react-router-dom";
import Home from "./Comp/Home";
import About from "./Comp/About";
import Projects from "./Comp/Project";
import Mainskill from "./Comp/Mainskill";
import Contact from "./Comp/contact";
import Navbar from "./Comp/Navbar";



const App =()=>{

  return(

    <div className="text-white tracking-widest">

      <Navbar/>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Projects />} />
        <Route path="/Skills" element={<Mainskill />} />
        <Route path="/contact" element={<Contact />} />








      </Routes>




    </div>


  )
}


export default App