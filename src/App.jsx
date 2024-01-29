import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx"
import Student from "./Student.jsx"


function App() {
  return(
    <>
      <Header></Header>
      <Button></Button>
      <Student name ="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={36} isStudent={true}></Student>
      <Food></Food>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Footer></Footer>
    </>
  );
}

export default App
