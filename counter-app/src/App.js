import {React, useState} from 'react'
import './App.css';
import Button from "./components/Button.js"





 function App() {
   const [counter, setCounter] = useState(0);

   //increase counter
   const increase = () =>{
     setCounter(count => count + 1);
   }
   //decrease counter
   const decrease = () =>{
     setCounter(count => count - 1);
   }

   const reset = () =>{
     setCounter(0)
   }



  return (
    <div className="counter">
      <h1 >React Counter</h1>
      <span className='counter_output'>{counter}</span>
      <div className='btn_container'>
        {/* <button className='control_btn' onClick={increase}>+</button>
        <button className='control_btn' onClick={decrease}>-</button>
        <button className='reset' onClick={reset}>Reset</button> */}
        <Button 
          className = {'control_btn'}
          onClick = {increase}
          label = {'+'}
          />
        <Button
        className={'control_btn'}
        onClick = {decrease}
        label = {'-'}
        />
        <Button
        className={'reset'}
        onClick = {reset}
        label = {'reset'}
         />

        




      </div>
      
    </div>
  );
}

export default App;
