import React, {useState} from 'react'

function Counter(){

  const [count, setCount] = useState(0);

  const increment = () => {
    // c represents the previous count//
    // Takes the pending state to calculate NEXT state - not the current state //
    // Shown we are passing an updater function
    // React puts your updater function in a queue
    // During the next render, it will call them in the same order
    // Good practice to use updater function event for one
    setCount(c => c + 1);
    setCount(c => c + 1);
    setCount(c => c + 1);

  }
  const decrement = () => {
    setCount(c => c - 1);
    setCount(c => c - 1);
    setCount(c => c - 1);
  }

  const reset =() => {
    setCount(0);
  }

  return(
    <div className ="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Reduce</button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={increment}>Increase</button>
    </div>
    )

}

export default Counter
