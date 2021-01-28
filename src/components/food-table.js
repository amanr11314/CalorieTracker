import React from "react";
import FoodPill from "./food-pill";
export default function FoodTable({ calorieData, onFoodPillClicked }) {
  return (
    calorieData
      .map(({ name, measure, calories }) => (
        <FoodPill
          key={name}
          name={name}
          measure={measure}
          calories={calories}
          onFoodPillClick={onFoodPillClicked}
        />
      ))
  );
}
