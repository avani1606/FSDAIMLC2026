import React, {useEffect,useState} from 'react'

function Shopping(){
    const[data,setData]=useState();
    useEffect(()=>{
        async function fetchData(){
            try{
                const response=await fetch('https://fakestoreapi.com/products');
                const jsonres=await response.json();
                console.log(jsonres);
                setData(jsonres);

            }catch(e){
                console.log(e)

            }

        }
        fetchData(); //Fetchdata calls useeffect automatically when the component is mounted
    },[])


  return (
    <div>
       Shopping 
       {JSON.stringify(data)}
    </div>
  )
}

export default Shopping
