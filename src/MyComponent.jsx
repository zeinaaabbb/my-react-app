import React, {useState} from 'react'

function MyComponent() {

  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  //Use setter function to change name/value on the virtual DOM
  //will trigger a render of virtual DOM normal variables dont
 // you can also set the initail useState function i.e add useState("guest")
  const updateName = () => {
    setName("Tina");
  }

  const incrementAge = () => {
    setAge(age +1);
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  }

  return(<div>
    <p>name : {name} </p>
    <button onClick={updateName}>Set Name</button>

    <p>age : {age} </p>
    <button onClick={incrementAge}>Increment Age</button>

    <p>isEmployed : {isEmployed ? "Yes" : "No"} </p>
    <button onClick={toggleEmployedStatus}>Toggle Status</button>
  </div>)
}

export default MyComponent
