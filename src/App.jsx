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

    </> 
                  
                  
                  );
}

export default App
