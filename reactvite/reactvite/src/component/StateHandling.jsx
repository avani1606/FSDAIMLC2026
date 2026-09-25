import React, {useState} from "react";

function StateHandling() {
  const [counter, setCounter] = useState(29);
function increment(){
    setCounter(counter+10);
}
  return (
    <div>Counter App
      <h2>Counter={counter}</h2>
      <button onClick={increment}>increaseCounter</button>
      <button onClick={()=>setCounter(counter-5)}>decreaseCounter</button>
    </div>
  );

}

export default StateHandling;