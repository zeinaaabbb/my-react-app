import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Btn from "./Btn/Btn.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx"
import Button from "./Button.jsx"
import ProfilePicture from "./ProfilePicture.jsx";
import MyComponent from "./MyComponent.jsx";
import { Component } from "react";
import Counter from "./Counter.jsx";
import MoreComponent from "./MoreComponent.jsx";
import OtherComponent from "./OtherComponent.jsx";
import FoodComponent from "./FoodComponent.jsx";
import CarComponent from "./CarComponent.jsx";

function App() {

  const fruits = [{id: 1, name: "apple" , calories: 95 },
  {id: 2, name: "orange", calories: 195},
  {id: 3, name: "Mango", calories: 165},
  {id: 4, name: "Coconut", calories: 35},
  {id: 5, name: "Grapes", calories: 75}];

  const vegetables = [{id: 6, name: "Potatoes" , calories: 115 },
  {id: 7, name: "Celery", calories: 19},
  {id: 8, name: "Carrots", calories: 85},
  {id: 9, name: "Corn", calories: 65},
  {id: 10, name: "Broccoli", calories: 50}];

  return(
    <>
      <Header></Header>
      <Counter/>
      <CarComponent/>
      <FoodComponent/>
      <OtherComponent/><br/>
      <MoreComponent/>
      <MyComponent/>
      <ProfilePicture/>
      <Btn></Btn>
      <Button/>
      <UserGreeting isLoggedIn={true} ></UserGreeting>
      {fruits.length > 0 ? <List items={fruits} category="Fruits" ></List> : null}
      {vegetables.length > 0 ?  <List items={vegetables} category="Vegetables" ></List> : null}
      <Student name ="Spongebob" age={30} isStudent={true}></Student>
      <Student name="Patrick" age={42} isStudent={false}></Student>
      <Student name="Squidward" age={50} isStudent={false}></Student>
      <Student name="Sandy" age={36} isStudent={true}></Student>
      <Student name="Larry"></Student>
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
