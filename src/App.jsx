import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from "./Components/Header"
import {Footer,Foot} from "./Components/Footer"
import PropsConcept from "./Components/PropsConcept"
import Pop from "./Components/Props"
import Destructure from "./Components/Destructure"
import PropsObject from "./Components/PropsObject"
import UseState from "./Components/UseState"
import ReactJavascriptXml from './Components/ReactJavascriptXml'
import ReactEvents from './Components/ReactEvents'
import IfElse from './Components/IfElse'
import Ternary from './Components/Ternary'
import LogicalAnd from './Components/LogicalAnd'
import ElemetVariable from './Components/ElemetVariable'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact"
import Nav from "./Components/Nav"
import UseEffect from './Components/useEffect'
import UseEffect1 from './Components/UseEffect1'
import Axios from './Components/Axios'
import Axios1 from './Components/Axios1'

function App() {
  const user={name:"surendra",age:20,lover:"divya"};
  return (
  <>

      <h1 className="bg-red-600">surendra</h1>
      
                  <Head />
                  <Footer />
                  <Foot />
                  <PropsConcept name="surendra" age={21} />
                  <Pop name="Surendra" age={21} />
                  <Destructure name="Divya" age={21} lover="divya" lovername="divyasurendra" />
                  <PropsObject Info={user} />
                  <UseState />
                  <ReactJavascriptXml />
                  <ReactEvents />
                  <IfElse />
                  <Ternary />
                  <LogicalAnd />
                  <ElemetVariable />
                  <UseEffect />
                  <UseEffect1 />
                  <Axios />
                  <Axios1 />
                     
                  <Nav />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                  </Routes>
                  
                 

    </> 
                  
                  
                  );
}

export default App
