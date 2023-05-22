import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from './pages/home/Home.js';
import AboutUs from "./pages/about-us/AboutUs";
import Services from "./pages/services-pag/Services-pag";
import Terapeuti from "./pages/terapeuti/Terapeuti";
import Prices from "./pages/prices/Prices";
import Contact from "./pages/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import { useState,useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import LogIn from "./pages/programari/Log-in";
import ScrollToTop from "./ScrollTop";
/* import Programari from ""; */

function App() {
  const [loading,setLoading]= useState(false);
  useEffect(()=> {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 6000)
  },[]) 
  console.clear();
  console.log("Made by NMA")

  
  return (
    <div className="App">
      <ScrollToTop></ScrollToTop>
      {
        
        loading ?

        <PropagateLoader
        loading={loading}
        size={30}
        color={'#444'}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height:"100vh",
          width:"100%"
        }}
      />

        :
        
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Services-pag" element={<Services/>}/>
        {/* <Route path="/Terapeuti" element={<Terapeuti/>}/> */}
        <Route path="/Prices" element={<Prices/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/http://localhost/licentaTest/site-react/licenta-react/php/applicationlayer/registerFormNOU.php" element={<LogIn/>}/> 
      </Routes> 
      }
    </div>
  );
}

export default App;
