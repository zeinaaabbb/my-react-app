import React, {useState} from 'react'

function OtherComponent () {

  const [car , setCar] = useState({year: 2024, make:"Ford" , model:"Mustang"});

  const handleYearChange = (e) => {
    // spread operator allows us to quickly copy all or part of an existing array or object into another array or object.
    // implement a update function and put in () as javascript will assume its a long function
    setCar(c => ({...car, year: e.target.value}));
  }

  const handleMakeChange = (e) => {
    setCar(c => ({...car, make: e.target.value}));
  }

  const handleModelChange = (e) => {
    setCar(c => ({...car, model: e.target.value}));
  }

  return(<>
    <div>
      <p>Your favourite car is {car.year} {car.make} {car.model} </p>
      <input type="number" value={car.year} onChange={handleYearChange}/><br/>
      <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
      <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </div>
    </>);
}

export default OtherComponent
