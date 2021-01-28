import React from "react";

export default function FoodClicked(props) {
  const { foodClicked } = props;
  return <h2>{!!foodClicked ? "Last Consumed: " + foodClicked : "Nothing"}</h2>;
}
