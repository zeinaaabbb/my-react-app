function List() {
  const fruits = ["apple", "orange", "Mango", "Coconut", "Grapes"]

  const listItems = fruits.map(fruit => <li>{fruit}</li>);

  return (<ol>{listItems}</ol>);

}

export default List
