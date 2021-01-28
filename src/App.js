import React from "react";
import "./styles.css";
import foodData from "./data/calorie-data";
import HeaderElement from "./components/header-element";
import TotalCalories from "./components/total-calories";
import FoodTable from "./components/food-table";
import FoodClicked from "./components/food-clicked";

import styled from "styled-components";
const MainContent = styled.div`
  box-sizing: border-box;
  color: #ecfdf9;
  display: flex;
  height: 100vh;
  flex-direction: column;
  margin-top: 15px;
  align-items: center;
`;
export default class App extends React.Component {
  state = {
    foodClicked: null,
    totalCalories: 0
  };

  onFoodPillClickHandler = (name, calories) => {
    const newCalories = this.state.totalCalories + calories;
    this.setState({ foodClicked: name, totalCalories: newCalories });
  };

  render() {
    return (
      <MainContent className="App">
        <HeaderElement header={"Calorie Tracker"} />
        <FoodTable
          calorieData={foodData}
          onFoodPillClicked={this.onFoodPillClickHandler}
        />
        <FoodClicked foodClicked={this.state.foodClicked} />
        <TotalCalories totalCalories={this.state.totalCalories} />
      </MainContent>
    );
  }
}
