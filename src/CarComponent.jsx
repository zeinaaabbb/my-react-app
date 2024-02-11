import React, {useState} from 'react';

function CarComponent() {

  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState([new Date().getFullYear]);
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {

    const newCar = {year: carYear, make: carMake, model: carModel};

    setCars(c => [...cars, newCar]);

  }

  const handleRemoveCar = (index) => {
    setCars(cars.filter((_, i) => i!==index));
  }

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  }

  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  }

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  }


  return(<>
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) =>
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>)}
      </ul>
      <input type="number" value={carYear} placeholder="Enter Car Year" onChange={handleYearChange}/><br/>
      <input type="text" value={carMake} placeholder="Enter Car Make" onChange={handleMakeChange}/><br/>
      <input type="text" value={carModel} placeholder="Enter Car Model" onChange={handleModelChange}/><br/>
      <button onClick={handleAddCar} >Submit Car</button>
    </div>
  </>);

}

export default CarComponent
