import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  let isLoggedIn = false;
  const [state1, setState]=useState(false);

  useEffect(()=>{
    if(isLoggedIn)
    {
      setState(true);
      console.log(state1);
    }

  },[isLoggedIn]);
  
  const handleClick = ()=>{
    setState(true);
    console.log(state1);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
