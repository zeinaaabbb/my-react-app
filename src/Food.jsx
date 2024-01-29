
function Food () {

  const food1 = "Apple Pie";
  const food2 = "Bannana Cake";

  return (
    <ul>
      <li>Lemon Cake</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food
