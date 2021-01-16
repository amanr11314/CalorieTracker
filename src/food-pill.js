import React from "react";

function FoodPill(props) {
  const { name, measure, calories, onFoodPillClick } = props;

  return (
    <div onClick={ () => onFoodPillClick(name, calories) }>
      <span> {name} </span>
      <span> {measure} </span>
      <span> {calories} </span>
    </div>
  );
}

export default FoodPill;
