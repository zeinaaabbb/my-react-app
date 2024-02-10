import React, {useState} from 'react'

function MyComponent() {

  const [name, setName] = useState();
  //Use setter function to change name/value on the virtual DOM
  //will trigger a render of virtual DOM normal variables dont
 // you can also set the initail useState function i.e add useState("guest")
  const updateName = () => {
    setName("Tina");
  }
  return(<div>
    <p>name : {name} </p>
    <button onClick={updateName}>Set Name</button>
  </div>)
}

export default MyComponent
