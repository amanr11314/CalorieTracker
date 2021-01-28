import React from "react";

export default function TotalCalories({ totalCalories }) {
  let calText =
    totalCalories < 1000
      ? totalCalories + " cal"
      : (totalCalories / 1000).toFixed(1) + " kcal";
  return <h2>{"Total: " + calText}</h2>;
}
