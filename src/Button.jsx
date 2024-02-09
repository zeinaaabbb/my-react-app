
function Button() {
  // const handleClick = () => console.log("hello click");

  // const handleClick2 = (name) => console.log(`${name} stop clicking me`)
  /*-----*/
  // let count = 0;

  // const handleClick = (name) => {
  //   if (count <3) {
  //     count++;
  //     console.log(`${name} you clicked me ${count} time/s`)
  //   } else {
  //     console.log(`${name} stop clicking me`)
  //   }
  // }

  const handleClick = (e) => e.target.textContent = "Yes!";

  return (<button onDoubleClick={(e) => handleClick(e)}>Click meeeeee!</button>);
}

export default Button
