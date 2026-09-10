import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './component/ICard'
function App() {
  // let a=21;
  // let name="Krishna"
  // return (
  //   <div style={{border:'2px solid black'}}>
  //     <h2 style={({color:"green"})}> Welcome to React using Vite </h2>
  //     <h2 style={{color:'green'}}>value of a={a}</h2>
  //     <h2 style={{color:'green'}}>Name={name}</h2>

  //     <div>
  //     <ICard />
  //     </div>
  //   </div>
  return(
    <div style={{border:'2px solid black'}}>
      <h2>Hiiii</h2>
      <ICard />
    </div>
  )
}

export default App
