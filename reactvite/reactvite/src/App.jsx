import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './component/ICard'
import ICardGallery from './component/ICardGallery'
import React from "react";
import ImdbCard from "./component/ImdbCard";
import StateHandling from './component/StateHandling';
import Imagemanipulation from './component/Imagemanipulation';
import SampleUseEffect from './component/SampleUseEffect';
import Shopping from './component/Shopping';
function App() {
  return (
    <div>
{/* <StateHandling /> */}
{/* <Imagemanipulation/> */}
{/* <SampleUseEffect/> */}
<Shopping/>
    </div>
  )
}

export default App;
