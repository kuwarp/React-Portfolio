import React from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Skiils from "./Components/Skills";
import Projects from "./Components/Projects";
import Repositories from "./Components/Repositories";
import Contact from "./Components/Contact";


const App = () =>{
    return(
        <>
          
          <Navbar/>
          <Header/>
          <About/>
          <Skiils/>
          <Projects/>
          <Repositories/>
          <Contact/>
        </>
    );

}
export default App;