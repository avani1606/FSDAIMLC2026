import React ,{useState}from 'react'
import cat from './images/rabbit.jpg';
function Imagemanipulation() {

    const[catHeight,setCatHeight]=useState(200);
    const[catAngle,setCatAngle]=useState(30);
function setHeight(){
    setCatHeight(catHeight+10);
}
function setAngle(){
    setCatAngle(catAngle+30);
}
    return(
        <div>
            <h1 style={{color:'red',backgroundColor:'black'}}>Imagemanipulation</h1>
            <div style={{border:'2px solid red',height:'400px', width:'400px',marginleft:'300px'}}>
                <img src={cat} height={catHeight} width={200} style={{transform:`rotate(${catAngle}deg)`}}></img>
            </div>
            <button onClick={setHeight}>Increase Height</button>
            <button onClick={()=>setCatHeight(catHeight-10)}>Decrease Height</button>
            <button onClick={setAngle}>rotateImage</button>
        </div>
    )
}
export default Imagemanipulation;