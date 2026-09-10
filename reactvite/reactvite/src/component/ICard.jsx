import React from 'react'
function ICard() {
  let a=21;
  let name="Krishna"
  return (
    <div style={{border:'2px solid black'}}>
        <h2 style={{backgroundcolor:'brown',color:'white'}}> ABES ICard Component </h2>
      <h2 style={({color:"green"})}> Welcome to React using Vite </h2>
      <h2 style={{color:'green'}}>value of a={a}</h2>
      <h2 style={{color:'green'}}>Name={name}</h2>

    </div>
 
  )
}

export default ICard


