import React from "react";
import FoodPill from "./food-pill";
import calorieData from "./data/calorie-data";
import "./styles.css";

function LiveHeader(props) {
  return <h1> {props.header} </h1>;
}

function FoodClicked(props) {
  const { foodClicked } = props;
  return <h2>{foodClicked}</h2>;
}

function TotalCalories({ totalCalories }) {
  return <h2>{totalCalories}</h2>;
}

function FoodTable({ calorieData, onFoodPillClicked }) {
  return calorieData
    .slice(0, 10)
    .map(({ name, measure, calories }) => (
      <FoodPill
        key={name}
        name={name}
        measure={measure}
        calories={calories}
        onFoodPillClick={onFoodPillClicked}
      />
    ));
}

export default class App extends React.Component {
  state = {
    foodClicked: "nothing",
    totalCalories: 0
  };

  onFoodPillClickHandler = (name, calories) => {
    const newCalories = this.state.totalCalories + calories
    this.setState({ foodClicked: name, totalCalories: newCalories });
  };

  render() {
    return (
      <div className="App">
        <LiveHeader header={"Welcome to live"} />
        <FoodTable
          calorieData={calorieData}
          onFoodPillClicked={this.onFoodPillClickHandler}
        />
        <FoodClicked foodClicked={this.state.foodClicked} />
        <TotalCalories totalCalories={this.state.totalCalories} />
      </div>
    );
  }
}
