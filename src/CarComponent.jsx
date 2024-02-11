// Import necessary dependencies
import React, {useState} from 'react';

// Define the functional component CarComponent
function CarComponent() {

  // Define state variables for cars, carYear, carMake, and carModel
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState([new Date().getFullYear]);
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

   // Define the function to handle adding a new car
  const handleAddCar = () => {

    // Create a new car object with current state values
    const newCar = {year: carYear, make: carMake, model: carModel};

    // Update the cars state with the new car object
    setCars(c => [...cars, newCar]);

  }

   // Define the function to handle removing a car by index
  const handleRemoveCar = (index) => {
      // Update the cars state by filtering out the car at the specified index
    setCars(cars.filter((_, i) => i!==index));
  }

   // Define the function to handle changing the car year
  const handleYearChange = (e) => {
     // Update the carYear state with the new value from the input
    setCarYear(e.target.value);
  }

   // Define the function to handle changing the car make
  const handleMakeChange = (e) => {
    // Update the carMake state with the new value from the input
    setCarMake(e.target.value);

  }

  // Define the function to handle changing the car model
  const handleModelChange = (e) => {
     // Update the carModel state with the new value from the input
    setCarModel(e.target.value);
  }

   // Render the component with JSX
  return(<>
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) =>
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>)}
      </ul>
      {/* Input fields for car year, make, and model with corresponding change handlers */}
      <input type="number" value={carYear} placeholder="Enter Car Year" onChange={handleYearChange}/><br/>
      <input type="text" value={carMake} placeholder="Enter Car Make" onChange={handleMakeChange}/><br/>
      <input type="text" value={carModel} placeholder="Enter Car Model" onChange={handleModelChange}/><br/>
        {/* Button to submit a new car with onClick handler */}
      <button onClick={handleAddCar} >Submit Car</button>
    </div>
  </>);

}

// Export the CarComponent as the default export
export default CarComponent
