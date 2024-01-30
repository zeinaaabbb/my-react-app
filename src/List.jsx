import PropTypes from "prop-types"

function List(props) {

  const category = props.category;
  const itemList = props.items;


  // const fruits = [{id: 1, name: "apple" , calories: 95 },
  //                 {id: 2, name: "orange", calories: 195},
  //                 {id: 3, name: "Mango", calories: 165},
  //                 {id: 4, name: "Coconut", calories: 35},
  //                 {id: 5, name: "Grapes", calories: 75}];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)); //reverse alphabetical
  // fruits.sort((a, b) => a.calories - b.calories) //Numeric
  // fruits.sort((a, b) => a.calories - b.calories) //Decsending Numeric

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

  // const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: &nbsp;
  // <b>{lowCalFruit.calories}</b>
  // </li>);

// const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: &nbsp;
//   <b>{highCalFruit.calories}</b>
//   </li>);

const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;
  <b>{item.calories}</b>
  </li>);

  return (<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
          </>);

}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(
    {id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number }))
}

List.defaultProps = {
  category : "category",
  items : [],
}


export default List
