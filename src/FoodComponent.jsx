import React, {useState} from 'react';

function FoodComponent(){

  const [foods, setFoods] = useState(["Apple", "Orange", "Mango"]);

  const handleAddFood = () => {

    const newFood = document.getElementById("foodInput").value;
    // console.log(newFood.value);
    // allows resetting
    document.getElementById("foodInput").value = "" ;
    setFoods(f => [...f, newFood]);

  }

  const handleRemoveFood = () => {

  }

  return(<>
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => <li key={index}>{food}</li>)}
      </ul>
      <input type="text" placeholder="Add Food name" id="foodInput"/>
      <button onClick={handleAddFood}>Enter Food</button>
    </div>
  </>)
}

export default FoodComponent
